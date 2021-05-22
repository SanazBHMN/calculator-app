var body = document.querySelector('body');

var themeToggleFirst = document.querySelector('#first');
var themeToggleSecond = document.querySelector('#second');
var themeToggleThird = document.querySelector('#third');

var theme1 = document.querySelector('.theme-1')
var theme2 = document.querySelector('.theme-2')
var theme3 = document.querySelector('.theme-3')

themeToggleFirst.addEventListener('click', () => {
    if(body.classList.contains('theme-2') || body.classList.contains('theme-3')) {
        console.log('theme 1 fired')
        // body.classList.remove('theme-2');
        // body.classList.remove('theme-3');
    }
    body.classList.add('theme-1');
    // body.classList.toggle('theme-1');
})

themeToggleSecond.addEventListener('click', () => {
    if(body.classList.contains('theme-1') || body.classList.contains('theme-3')) {
        console.log('theme 2 fired');
        // body.classList.remove('theme-1');
        // body.classList.remove('theme-3');
    }
    body.classList.add('theme-2');
    // body.classList.toggle('theme-2');
});

themeToggleThird.addEventListener('click', () => {
    if(body.classList.contains('theme-1') || body.classList.contains('theme-2')) {
        console.log('theme 3 fired');
        // body.classList.remove('theme-1');
        // body.classList.remove('theme-2');
    }
    body.classList.add('theme-3')
    // body.classList.toggle('theme-3')
})