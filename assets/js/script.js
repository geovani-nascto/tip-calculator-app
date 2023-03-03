let bill = document.getElementById('bill').value;
//let billValue = parseInt(bill.value)
let tip5 = document.getElementById('tip5').value;
let tip10 = document.getElementById('tip10').value;
let tip15 = document.getElementById('tip15').value;
let tip25 = document.getElementById('tip25').value;
let tip50 = document.getElementById('tip50').value;
let tipCustom = document.getElementById('custom').value;
let numberPeoples = document.getElementById('number-peoples');
let numberPeoplesValue = parseInt(numberPeoples.value)
let labelTipPerson = document.getElementById('label-tip-person');
let labelTotalPerson = document.getElementById('label-total-person');
let resetButton = document.getElementById('reset');
let errorBillValue = document.getElementById('error-bill');
let errorTipValue = document.getElementById('error-tip');
let errorNumberPeoples = document.getElementById('error-number-peoples');


function tips5(){
    if(bill >= 5){
        console.log('Maior ou igual a 5');
    } else{
        console.log('Menor que 5');
    }
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