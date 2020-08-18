const load = document.querySelector('#load');
const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('h1');


load.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    load.classList.toggle('toggle')
})