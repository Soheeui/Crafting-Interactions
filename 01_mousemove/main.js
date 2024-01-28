
var root = document.documentElement;
console.log(root);
document.addEventListener('mousemove',function(e){
    console.log(e.x,e.y)
    root.style.setProperty('--x',e.x)
    root.style.setProperty('--y',e.y)
})