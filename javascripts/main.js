console.log('This would be the main JS file.');
var scene;

var init = function() {
    scene = document.querySelector('#scene');    
};

window.onload = function() {
    init();  
};

window.onmousemove = function(e) {
    var dx = window.innerWidth / 0.5 - e.pageX;
    var s = 'rotateY(' + dx + 'deg)'; 
    scene.style['-webkit-transform'] = s;
};