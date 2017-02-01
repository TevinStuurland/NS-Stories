var tijd = document.querySelector('.story');
var exit = document.querySelector('.story + a');
var onMove = document.querySelector('body main');

setTimeout(function(){ 
    tijd.classList.add('removed');
    exit.classList.add('removed');
}, 1000);

onMove.onmousemove = function(event) {
    tijd.classList.remove('removed');
    exit.classList.remove('removed');
};