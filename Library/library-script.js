const button = document.querySelector('button');

button.addEventListener('click', () => {
    const name = prompt('What is your name?');
    const greeting = document.querySelector('#greeting');
    greeting.textContent = `Hello ${name}, nice to see you!`;
});