let lastScrollTop = 0;
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const delta = 5;
const headerHeight = header ? header.offsetHeight + (nav ? nav.offsetHeight : 0) : 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (Math.abs(scrollTop - lastScrollTop) < delta) return;

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        if (header) header.classList.add('hide-nav');
        if (nav) nav.classList.add('hide-nav');
    } else {
        if (header) header.classList.remove('hide-nav');
        if (nav) nav.classList.remove('hide-nav');
    }

    lastScrollTop = scrollTop;
});