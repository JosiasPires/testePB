let cursor = document.querySelector('.cursor');
let anim = Array.from(document.querySelectorAll('.anim'));

anim.forEach(a => {
    a.addEventListener('mouseover', growSize);
    a.addEventListener('mouseleave', decreaseSize);
})

document.addEventListener('mousemove', moveCursor);

function moveCursor(e) {
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
}

function growSize() {
    cursor.style.padding = '1rem';
}

function decreaseSize() {
    cursor.style.padding = '0.5rem';
}

let toggle = document.querySelector('.toggle');
let circle = document.querySelector('.circle');
let t = 0;
toggle.addEventListener('click', changeMode);

function changeMode() {
    if (t == 0) {
        toggle.style.backgroundImage = 'url("sun.png")';
        document.body.style.backgroundColor = 'black';
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('header').style.borderBottom = '1px solid white';
        t = 1;
        console.log(t)
    }
    else {
        toggle.style.backgroundImage = 'url("moon.png")';
        document.body.style.backgroundColor = 'white';
        document.querySelector('header').style.backgroundColor = 'white';
        document.querySelector('header').style.borderBottom = '1px solid black';
        t = 0;
    }
}