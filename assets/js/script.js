//let bill = document.getElementById('bill').value;
//let billValue = parseInt(bill.value)
let tip5 = document.getElementById('tip5').value;
let tip10 = document.getElementById('tip10').value;
let tip15 = document.getElementById('tip15').value;
let tip25 = document.getElementById('tip25').value;
let tip50 = document.getElementById('tip50').value;
let tipCustom = document.getElementById('custom').value;
//let numberPeoples = document.getElementById('number-peoples');
//let numberPeoplesValue = parseInt(numberPeoples.value)
let labelTipPerson = document.getElementById('label-tip-person');
let labelTotalPerson = document.getElementById('label-total-person');
let resetButton = document.getElementById('reset');
let errorBillValue = document.getElementById('error-bill');
let errorTipValue = document.getElementById('error-tip');
let errorNumberPeoples = document.getElementById('error-number-peoples');

//tip5.addEventListener('click', tips5)

function tips5(){
    const bill = parseFloat(document.getElementById('bill').value);
    const numberPeoples = parseInt(document.getElementById('number-peoples').value);

    const tipAmount = (bill * 0.05) / numberPeoples;
    const totalAmount = (bill + (bill * 0.05)) / numberPeoples;

    document.getElementById('label-tip-person').innerHTML = `$${tipAmount.toFixed(2)}`;
    document.querySelector('.label-result:last-child h1').innerHTML = `$${totalAmount.toFixed(2)}`;

}

// function custom(porcentagem){
//     porcent = porcentagem;
//     inputCustom();
// }

// function inputCustom(){
//     console.log(tipCustom);

//     if(tipCustom > 0){
//         console.log('Maior que zero')
//         errorTipValue.style.display = 'none'

//     } else{
//         errorTipValue.style.display = 'block'
//     }
// }