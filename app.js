const bars = document.querySelector('.bars');
const x = document.querySelector('.x');
const menu = document.querySelector('nav ul');

bars.addEventListener('click', () => {
    menu.style.display = 'flex';
    bars.style.display = 'none';
    x.style.display = 'flex';
    
});

x.addEventListener('click', () => {
    menu.style.display = 'none';
    bars.style.display = 'flex';
    x.style.display = 'none';
    
});