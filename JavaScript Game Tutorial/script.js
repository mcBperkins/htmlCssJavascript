// --- Initial Setup ---
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.width = 640; // Increased size for better visuals
canvas.height = 480;

const tileSize = 40;
const game = {
    gold: 150, // More starting gold
    health: 15,
    score: 0,
    enemies: [],
    towers: [],
    projectiles: [] // New array for projectiles
};

const updateUI = () => {
    document.getElementById('score').textContent = game.score;
    document.getElementById('gold').textContent = game.gold;
    document.getElementById('health').textContent = game.health;
};

// --- Game Classes ---

// New Projectile Class
class Projectile {
    constructor(x, y, targetEnemy) {
        this.x = x;
        this.y = y;
        this.target = targetEnemy;
        this.radius = 3;
        this.color = '#FFEB3B'; // Bright yellow
        this.speed = 8;
        this.damage = 1;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (!this.target || this.target.health <= 0) return true; // Mark for removal

        // Calculate direction to target
        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        const distance = Math.hypot(dx, dy);

        // Move towards target
        this.x += (dx / distance) * this.speed;
        this.y += (dy / distance) * this.speed;

        // Check for collision
        if (distance < this.radius + this.target.radius) {
            this.target.health -= this.damage;
            game.score += 10;
            updateUI();
            return true; // Mark for removal (hit)
        }

        this.draw();
        return false; // Keep projectile alive
    }
}

class Enemy {
    constructor(x, y) {
        this.x = x;
        this.y = pathY;
        this.radius = tileSize * 0.35;
        this.speed = 1.2;
        this.color = '#F44336';
        this.maxHealth = 5;
        this.health = this.maxHealth;
    }

    // Draw Health Bar above the enemy
    drawHealthBar() {
        const barWidth = this.radius * 2;
        const healthPercent = this.health / this.maxHealth;
        const barX = this.x - this.radius;
        const barY = this.y - this.radius - 10;

        // Background (Red)
        ctx.fillStyle = '#C62828';
        ctx.fillRect(barX, barY, barWidth, 5);

        // Foreground (Green)
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(barX, barY, barWidth * healthPercent, 5);
        
        // Border
        ctx.strokeStyle = '#333';
        ctx.strokeRect(barX, barY, barWidth, 5);
    }
    
    draw() {
        // Draw enemy circle
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.closePath();

        this.drawHealthBar();
    }

    update() {
        this.x += this.speed; 
        
        if (this.x > canvas.width) {
            game.health -= 1;
            game.enemies = game.enemies.filter(e => e !== this);
            updateUI();
        }

        this.draw();
    }
}

class Tower {
    constructor(x, y) {
        this.x = x + tileSize / 2;
        this.y = y + tileSize / 2;
        this.size = tileSize * 0.6;
        this.color = '#03A9F4';
        this.range = 150; // Increased range
        this.fireRate = 30; // Faster fire rate
        this.currentFrame = 0;
    }

    draw() {
        // Draw range circle (only visible when placing/selected in a real game, but always drawn here)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.range, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(3, 169, 244, 0.08)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(3, 169, 244, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();

        // Draw tower body (stylized square/turret)
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
        ctx.strokeStyle = '#111';
        ctx.lineWidth = 2;
        ctx.strokeRect(this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    }
    
    update() {
        this.draw();
        this.currentFrame++;
        
        // Find the FIRST living enemy in range
        const target = game.enemies.find(enemy => {
            if (enemy.health <= 0) return false;
            const distance = Math.hypot(this.x - enemy.x, this.y - enemy.y);
            return distance <= this.range;
        });

        if (target && this.currentFrame >= this.fireRate) {
            // FIRE A PROJECTILE!
            game.projectiles.push(new Projectile(this.x, this.y, target));
            
            // Visual pulse on fire
            this.color = '#FFEB3B'; 
            setTimeout(() => this.color = '#03A9F4', 50);

            this.currentFrame = 0;
        }
    }
}

// --- Game Map and Logic ---

const pathY = canvas.height / 2; 

function drawMap() {
    // Draw the road/path
    ctx.fillStyle = '#37474F'; // Dark slate blue road
    ctx.fillRect(0, pathY - tileSize / 2, canvas.width, tileSize);
    
    // Draw grid lines on the grass area
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += tileSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += tileSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const gridX = Math.floor(x / tileSize) * tileSize;
    const gridY = Math.floor(y / tileSize) * tileSize;

    // Check if placement is too close to the path
    if (Math.abs(gridY + tileSize / 2 - pathY) < tileSize / 2) {
        return; 
    }
    
    // Check if position is already occupied (simple check)
    const isOccupied = game.towers.some(t => t.x === gridX + tileSize / 2 && t.y === gridY + tileSize / 2);

    if (!isOccupied && game.gold >= 50) {
        game.towers.push(new Tower(gridX, gridY));
        game.gold -= 50;
        updateUI();
    }
});

document.getElementById('start-wave').addEventListener('click', () => {
    for (let i = 0; i < 8; i++) { // Spawn more enemies
        game.enemies.push(new Enemy(-tileSize * i * 3, pathY)); 
    }
    updateUI();
});

// --- The Main Game Loop ---
function animate() {
    requestAnimationFrame(animate);
    
    // 1. Clear the canvas
    ctx.fillStyle = '#1e3a24'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 2. Draw Map and Grid
    drawMap();
    
    // 3. Draw/Update Towers
    game.towers.forEach(tower => tower.update());

    // 4. Update and Draw Projectiles, filter out hits
    game.projectiles = game.projectiles.filter(p => !p.update());

    // 5. Draw/Update Enemies, filter out dead ones
    game.enemies = game.enemies.filter(e => e.health > 0);
    game.enemies.forEach(enemy => enemy.update());

    // 6. Check for Game Over
    if (game.health <= 0) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#E91E63';
        ctx.textAlign = 'center';
        ctx.font = '60px Consolas';
        ctx.fillText('G A M E  O V E R', canvas.width / 2, canvas.height / 2);
        ctx.font = '24px Consolas';
        ctx.fillText(`Final Score: ${game.score}`, canvas.width / 2, canvas.height / 2 + 50);
        return; 
    }
}

// Start the game
animate();
updateUI();