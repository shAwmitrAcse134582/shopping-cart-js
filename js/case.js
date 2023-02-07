//*+ operation in phone case
function updateCase(isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCase(true);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotaElement = document.getElementById('case-total');
    caseTotaElement.innerText = caseTotalPrice;

})
//*-operation in  in phonecase
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseNumberFieldMinus = document.getElementById('case-number-field');
    // const caseNumberStringMinus = caseNumberFieldMinus.value;
    // const previousCaseNumberMinus = parseInt(caseNumberStringMinus);
    // const newCaseNumberMinus = previousCaseNumberMinus - 1;
    // caseNumberFieldMinus.value = newCaseNumberMinus;
    updateCase(false);
})
