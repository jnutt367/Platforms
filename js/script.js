var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 400, 100, 100);
c.fillStyle = 'skyblue';
c.fillRect(300, 100, 100, 100);
c.fillStyle = 'rgba(444, 0, 111, 0.5)';
c.fillRect(500, 200, 100, 100);
c.fillStyle = 'rgba(333, 0, 222, 0.5)';
c.fillRect(600, 500, 100, 100);
console.log(canvas)

// line

c.beginPath();
c.moveTo(150, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.lineTo(300, 200);
c.lineTo(300, 600);
c.strokeStyle = "green";
c.stroke();