//*increment decrement Part
function updatePhone(istrue) {
    const phoneNumberField = document.getElementById('phone-number-field');

    const phoneNumberString = phoneNumberField.value;
    const phoneTotalNumber = parseInt(phoneNumberString);
    let phoneNewNumber;
    if (istrue) {
        phoneNewNumber = phoneTotalNumber + 1;
    }
    else {
        phoneNewNumber = phoneTotalNumber - 1;
    }
    phoneNumberField.value = phoneNewNumber;

    return phoneNewNumber;

}


//*prize calculation

function updatePrize(phoneNewNumber) {
    const phoneCostField = document.getElementById('phone-total');
    const phoneTotalCost = 1219 * phoneNewNumber;
    phoneCostField.innerText = phoneTotalCost;
}




//*phone's plus operation
document.getElementById('btn-phone-plus').addEventListener('click', function () {


    const phoneNewNumber = updatePhone(true);

    updatePrize(phoneNewNumber);

    //*calculate Total
    calculateSubTotal();

})



//*phone's Minus Operation
document.getElementById('btn-phone-minus').addEventListener('click', function () {

    const phoneNewNumber = updatePhone(false);
    updatePrize(phoneNewNumber);
    calculateSubTotal();

})

