const load = document.querySelector('#load');
const select = document.querySelector('.select');
const text = document.querySelector('h1')


load.addEventListener('click', () => {
    if (select.style.display === 'none'){
      select.style.display = 'flex';  
    } else {
        select.style.display = 'none'
    }
    
})