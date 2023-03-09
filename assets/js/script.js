let tip5 = document.getElementById('tip5').value;
let tip10 = document.getElementById('tip10').value;
let tip15 = document.getElementById('tip15').value;
let tip25 = document.getElementById('tip25').value;
let tip50 = document.getElementById('tip50').value;
const numberPeoples = parseInt(document.getElementById('number-peoples').value);
const labelTipPerson = document.getElementById('label-tip-person');
const labelTotalPerson = document.getElementById('label-total-person');
let resetButton = document.getElementById('reset');
let errorBillValue = document.getElementById('error-bill');
let errorTipValue = document.getElementById('error-tip');
let errorNumberPeoples = document.getElementById('error-number-peoples');

function calculateTip(tipPercentage){
    const bill = parseFloat(document.getElementById('bill').value);
    const numberPeoples = parseInt(document.getElementById('number-peoples').value);

    const tipAmount = (bill * (tipPercentage/100)) / numberPeoples;
    const totalPerson = (bill + (bill * (tipPercentage/100))) / numberPeoples;

    labelTipPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    labelTotalPerson.innerHTML = `$${totalPerson.toFixed(2)}`;

    resetButton.style.backgroundColor = '#26c2ad'
    resetButton.style.color = '#00474b'
}

document.getElementById('tip5').addEventListener('click', function(){
    calculateTip(5)
})

document.getElementById('tip10').addEventListener('click', function(){
    calculateTip(10)
})

document.getElementById('tip15').addEventListener('click', function(){
    calculateTip(15)
})

document.getElementById('tip25').addEventListener('click', function(){
    calculateTip(25)
})

document.getElementById('tip50').addEventListener('click', function(){
    calculateTip(50)
})

document.getElementById('custom').addEventListener('keyup', enterKey)

function enterKey(event){
    if(event.key === 'Enter'){
        const tipCustom = parseFloat(document.getElementById('custom').value);
        calculateTip(tipCustom);
    }
}

function reset(){
    if(labelTipPerson != "$0.00" || labelTotalPerson != "$0.00"){
        labelTipPerson.innerHTML = "$0.00";
        labelTotalPerson.innerHTML = "$0.00"
        resetButton.style.backgroundColor = '#0d686d'
        resetButton.style.color = '#045d63'
    } else{
        console.log('erro')
    }
}