function getPin() {
    const pin = generatePin();

    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {

    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // console.log(pin);
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            // console.log(previousTypedNumber);
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumbers = previousTypedNumber + number;
        typeNumberField.value = newTypedNumbers;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayPinField=document.getElementById('display-pin');
    const currentPin=displayPinField.value;

    const typeNumberField=document.getElementById('typed-numbers');
    const typeNumber=typeNumberField.value;

    const pinSuccessMessage=document.getElementById('pin-success');
    const pinFailerMessage=document.getElementById('pin-loss');
    
    if(typeNumber===currentPin){
        // console.log('correct pin');
        
        pinSuccessMessage.style.display='block';
        pinFailerMessage.style.display='none';
    }
    else{
        // console.log('incorrect pin');
        
        pinFailerMessage.style.display='block';
        pinSuccessMessage.style.display='none';
    }
})