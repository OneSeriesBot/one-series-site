"use strict";

function animateNumbers() {
    const stats = {
        servers: "---",
        users: "---",
        uptime: "---"
    };

    const statElements = document.querySelectorAll('.stat-number');
    
    statElements.forEach((element, index) => {
        const target = Object.values(stats)[index];
        let current = 0;
        const increment = target / 100;
        const duration = 2000;
        const steps = 100;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.round(current).toLocaleString();
            if (index === 2) { // Per l'uptime
                element.textContent = current.toFixed(1);
            }
        }, duration / steps);
    });
}

document.addEventListener('DOMContentLoaded', animateNumbers);