
const input = document.querySelector('input#name-input');
const userGreeting = document.querySelector('span#name-output');

input.addEventListener('input', inputChange);

function inputChange (event) {
    userGreeting.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '') {
        userGreeting.textContent = 'Anonymous'
    }
}