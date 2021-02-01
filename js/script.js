var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
//c.fillStyle = 'rgba(255, 0, 0, 0.5)';
//c.fillRect(100, 400, 200, 200);
//c.fillStyle = 'skyblue';
//c.fillRect(400, 100, 100, 100);
//c.fillStyle = 'rgba(444, 0, 111, 0.5)';
//c.fillRect(500, 300, 150, 150);
//c.fillStyle = 'rgba(333, 0, 222, 0.5)';
//c.fillRect(600, 700, 100, 100);
//c.fillStyle = 'rgba(535, 333, 444, 0.5)';
//c.fillRect(400, 800, 100, 100);
//c.fillStyle = 'rgba(333, 0, 222, 0.5)';
//c.fillRect(100, 100, 50, 50);
//c.fillStyle = 'rgba(333, 111, 222, 0.5)';
//c.fillRect(250, 550, 100, 100);
//console.log(canvas)

// line
//c.beginPath();
//c.moveTo(0, 0);
//c.lineTo(500, 500);
//c.lineTo(1000, 0);
//c.lineTo(1100, 200);
//c.lineTo(0, 100);
//c.strokeStyle = "green";
//c.stroke();

// Arc / Circle
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.strokeStyle = "#fa34a3";
//c.stroke();

//for (var i = 0; i < 300; i++) {
//  var x = Math.random() * window.innerWidth;
//  var y = Math.random() * window.innerHeight;
//  c.beginPath();
//  c.arc(x, y, 30, 0, Math.PI * 2, false);//  c.strokeStyle = "blue";
//  c.stroke();
// }

var x = 200;
var y = 200;
var dx = 5;
var dy = 5;
var radius = 200;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'green';
    c.stroke();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;

}
animate();