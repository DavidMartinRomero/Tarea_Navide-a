const elementos1 = document.querySelectorAll(".grupo1")
const elementos2 = document.querySelectorAll(".grupo2")
const elementos3 = document.querySelectorAll(".grupo3")
const elementos4 = document.querySelectorAll(".grupo4")

var color1 = 'rgb(255, 0, 0)';
var color2 = 'rgb(0, 255, 0)';
var color3 = 'rgb(0, 0, 255)';
var color4 = 'rgb(255, 255, 0)';

setInterval(() => {
elementos1.forEach(elemento => {
elemento.style.fill = color1;
});

elementos2.forEach(elemento => {
elemento.style.fill = color2;
});

elementos3.forEach(elemento => {
elemento.style.fill = color3;
});

elementos4.forEach(elemento => {
elemento.style.fill = color4;
});

[color1, color2, color3, color4] = [color2, color3, color4, color1];
}, 700);