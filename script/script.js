var body = document.querySelector('body');

var themeToggleFirst = document.querySelector('#first');
var themeToggleSecond = document.querySelector('#second');
var themeToggleThird = document.querySelector('#third');

themeToggleFirst.addEventListener('click', () => {
    if(body.classList.contains('theme-2') || body.classList.contains('theme-3')) {
        console.log('theme 1 fired')
        body.classList.remove('theme-2');
        body.classList.remove('theme-3');
        body.classList.add('theme-1');
    }
    // body.classList.add('theme-1');
})

themeToggleSecond.addEventListener('click', () => {
    if(body.classList.contains('theme-1') || body.classList.contains('theme-3')) {
        body.classList.remove('theme-3');
        body.classList.add('theme-2');
    }
    // body.classList.add('theme-2');
});

themeToggleThird.addEventListener('click', () => {
    if(body.classList.contains('theme-1') || body.classList.contains('theme-2')) {
        body.classList.remove('theme-2');
        body.classList.add('theme-3')
    }
    // body.classList.toggle('theme-3')
})