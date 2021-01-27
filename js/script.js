// for collect data from login btn and display none;


const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
    const sectionhide = document.getElementById('loginSection');
    sectionhide.style.display = 'none';
    const transectionArea = document.getElementById('transaction');
    transectionArea.style.display = 'block';
});


// for collect data from deposit btn and more;
const deposit = document.getElementById('deposit');
deposit.addEventListener('click', function() {
    // deposite value add and empty input 
    const depositNumber = getInputNumber('depositAmount');


    // balance check and add with deposit 
    function totalAm(id, depositNumber) {
        if (depositNumber >= 0) {
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const BalanceNow = currentNumber + depositNumber;
            document.getElementById(id).innerText = BalanceNow;
        }

    }

    totalAm('currentBalance', depositNumber);
    totalAm('currentDeposit', depositNumber);
    document.getElementById('depositAmount').value = " ";
});

// /
// /
// /
// /
// /
// withdraw part start from here
const addWithdraw = document.getElementById('withdraw');
addWithdraw.addEventListener('click', function() {
    const withdrawAmount = getInputNumber('inputWithdraw');
    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const presentWithdraw = parseFloat(currentWithdraw);



})

function getInputNumber(id) {
    const inputNumber = document.getElementById(id).value;
    const inputAmount = parseFloat(inputNumber);
    return inputAmount;
}