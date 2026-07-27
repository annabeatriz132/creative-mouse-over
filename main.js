let bunner = document.querySelector('.banner');
bunner.onmousemove = function(e){
    let x = e.pageX - bunner.offsetLeft;
    let y = e.pageY - bunner.offsetTop;
    bunner.style.setProperty('--x' x + 'px');
    bunner.style.setProperty('--y' y + 'px');
}
