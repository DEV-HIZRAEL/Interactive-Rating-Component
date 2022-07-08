
'use strict'

const ratecard = document.querySelector('.rate-card');
const thankCard = document.querySelector('.thank-you');
const rate = document.querySelector('.rate')
let btnsClick = document.querySelectorAll('.btn-number');
const submitCard = document.querySelector('.submit');
const rateNum = document.querySelector('.num-rate');



btnsClick.forEach((button) => {
    button.addEventListener('click', function() {
       console.log(button);
       const pressButton = document.querySelector('.btn-number');
       rateNum.textContent = `You selected ${pressButton} of 5`;
       
    })
})




submitCard.addEventListener('click', function() {
    ratecard.style.display = 'none';
    thankCard.style.display = 'block';
})


