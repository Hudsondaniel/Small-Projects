const title = document.querySelector('.form-element');
const errorMessage = document.querySelector('.error-message');

title.addEventListener('input', (e) => {
    const inputValue = e.target.value.trim();

    if (inputValue.length > 0) {
        errorMessage.style.display = 'none'; // Hide error message
    } else {
        errorMessage.style.display = 'block'; // Show error message
    }
});
