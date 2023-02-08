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

function updatePrize(phoneNewNumber) {
    const phoneCostField = document.getElementById('phone-total');
    const phoneTotalCost = 1219 * phoneNewNumber;
    phoneCostField.innerText = phoneTotalCost;
}





//*phone's plus operation
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberField.value;
    // const phoneTotalNumber = parseInt(phoneNumberString);

    const phoneNewNumber = updatePhone(true);
    // const phoneNewNumber = phoneTotalNumber + 1;
    // phoneNumberField.value = phoneNewNumber;

    // const phoneCostField = document.getElementById('phone-total');

    // const phoneTotalCost = 1219 * phoneNewNumber;
    // phoneCostField.innerText = phoneTotalCost;
    updatePrize(phoneNewNumber);
})

//*phone's Minus Operation
document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // const phoneNumberField = document.getElementById('phone-number-field');
    // const phoneNumberString = phoneNumberField.value;
    // const phoneTotalNumber = parseInt(phoneNumberString);
    // const phoneNewNumber = phoneTotalNumber - 1;
    // phoneNumberField.value = phoneNewNumber;

    const phoneNewNumber = updatePhone(false);

    // const phoneCostField = document.getElementById('phone-total');

    // const phoneTotalCost = 1219 * phoneNewNumber;
    // phoneCostField.innerText = phoneTotalCost;
    updatePrize(phoneNewNumber);

})

