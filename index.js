/* 'use strict' te mata el body abajo si no esta declarado */
console.log('llegue');
console.log('llegue');
console.log('llegue');
console.log('llegue');
console.log('llegue');

var body = document.getElementById('body');
body.addEventListener('mousemove', function(e){
    var xMove = e.offsetX;
    var yMove = e.offsetY;
    /*console.log(rgb('+xMove+','+yMove+','+yMove+'));

    body.style.backgroundColor = 'rgb('+xMove+','+yMove+','+yMove+')' */
})

console.log(typeof a);
var a = 'aa';

var a;
console.log(a === null);

if(a){
    console.log('tiene dato');
    }else{
        console.log('no tiene dato');
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  toggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });
});
