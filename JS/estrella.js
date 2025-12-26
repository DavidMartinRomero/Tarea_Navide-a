const star = document.getElementById("estrella");
let mark = 0;
let scale = 1
setInterval(() => {
    if (mark == 0) {
        scale = scale - 0.01;
        if (scale < 0.02) {
            mark = 1;
        }
    } else {
        scale = scale + 0.01;
        if (scale > 0.99) {
            mark = 0;
        }
    }
    star.style.transform = `scaleX(${scale})`
}, 10);