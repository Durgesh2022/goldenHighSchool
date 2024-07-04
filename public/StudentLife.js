let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});



let next1 = document.querySelector('.next1');
let prev1 = document.querySelector('.prev1');
next1.addEventListener('click', function() {
    let items = document.querySelectorAll('.item1');
    document.querySelector('.slide1').appendChild(items[0]);
});

prev1.addEventListener('click', function() {
    let items = document.querySelectorAll('.item1');
    document.querySelector('.slide1').prepend(items[items.length - 1]);
});
