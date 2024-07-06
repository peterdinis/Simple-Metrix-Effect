const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
setCanvasSize();

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * canvas.height / fontSize));

function drawLetter() {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0F0';
    context.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.075) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawLetter, 33);

window.addEventListener('resize', () => {
    setCanvasSize();
    columns = Math.floor(canvas.width / fontSize);
    drops.length = columns;
    for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * canvas.height / fontSize);
    }
});