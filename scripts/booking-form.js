const form = document.querySelector('.form-tickets');
const incBasic = document.querySelector('.increment.basic');
const incSenior = document.querySelector('.increment.senior');
const decBasic = document.querySelector('.decrement.basic');
const decSenior = document.querySelector('.decrement.senior');
const calcTotal = document.querySelector('.calc-total');
const inputBasic = document.getElementById('basic');
const inputSenior = document.getElementById('senior');


function increment(input){
    if(input.value < 99)  input.value = +input.value + 1;
}

function decrement(input){
    if (input.value > 0){
        input.value = +input.value - 1;
    }
}

function check(input) {
    if(input.value > 99)  input.value = 99;
    if(input.value < 0)  input.value = 0;
}

function calculateTotalPrice(countBasic, countSenior){
    return countBasic * 20 + countSenior * 10;
}

inputBasic.oninput = () => {check(inputBasic); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}
inputSenior.oninput = () => {check(inputSenior); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}

incBasic.onclick = () => {increment(inputBasic); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}
decBasic.onclick = () => {decrement(inputBasic); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}

incSenior.onclick = () => {increment(inputSenior); calcTotal.textContent= calculateTotalPrice(inputBasic.value, inputSenior.value)}
decSenior.onclick = () => {decrement(inputSenior); calcTotal.textContent = calculateTotalPrice(inputBasic.value, inputSenior.value)}


const dataForm = (form) => {
    return new FormData(form)
}


const dialogBooking = document.getElementById('booking');
const formBooking = document.querySelector('.booking-content');
const overviewDataType = document.querySelector('.data-type');
const types = {'permanent': 'Permanent exhibition', 'temporary': 'Temporary exhibition', 'combined': 'Combined admission'};

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = dataForm(form)
    //console.log(Array.from(data.entries()));
    formBooking.type_ticket.value =  data.get('type_ticket');
    //console.log( types[data.get('type_ticket')] );
    overviewDataType.textContent = types[data.get('type_ticket').toString()];
    formBooking.booking_senior.value = data.get('senior');
    formBooking.booking_basic.value = data.get('basic');

    dialogBooking.showModal();
})
dialogBooking.addEventListener('click', ({target, currentTarget})=>{
    if(target===currentTarget) dialogBooking.close()
})
