//calculator program

const display = document.getElementById('display');
let clear = false;

const appendToDisplay = (input) => {
    if (clear) {
        display.value = '';
        clear = false;
    }
    display.value += input;
}

const clearDisplay = () => {
    display.value = '';
    clear = false;
}

const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
    clear = true;
}