
const counterValue = {
    value: 0,
    
    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }
};


const minusOneBtn = document.querySelector('button[data-action="decrement"]');
const plusOneBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');


minusOneBtn.addEventListener('click', function() {

    counterValue.decrement();
    valueEl.textContent = counterValue.value;
   
    console.log(counterValue.value);

});

plusOneBtn.addEventListener('click', function () {

    counterValue.increment();
    valueEl.textContent = counterValue.value;

    console.log(counterValue.value);
});

