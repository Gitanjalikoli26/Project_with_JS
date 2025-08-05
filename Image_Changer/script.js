let content = document.querySelector('#content');
let heading = content.querySelector('h1'); 
let image = document.querySelector('img');
let button = document.querySelector('button');


image.addEventListener('mouseover', () => {
    image.src = 'paris.jpeg';         
    button.textContent = 'Paris';   
});

image.addEventListener('mouseleave', () => {
    image.src = 'london.jpeg';       
    button.textContent = 'London';    
});
