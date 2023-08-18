
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Fill out all the required input fields!');
        return
    
    }
        const formData = {
            email: formElements.email.value,
            password: formElements.password.value,
    };
    
    console.log(formData);
    
    event.currentTarget.reset();
    
}

