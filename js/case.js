document.getElementById('btn-card-plus').addEventListener('click',function(){
    const caseNumber=document.getElementById('case-number');
    const totalCaseNumber=parseInt(caseNumber.value);
    const newTotalCaseNumber=totalCaseNumber+1;
    caseNumber.value=newTotalCaseNumber;
    const casePrice=document.getElementById('case-price');
    const previousTotalCasePrice=parseInt(casePrice.innerText);
    const newTotalCasePrice=previousTotalCasePrice+59;
     casePrice.innerText=newTotalCasePrice;

})

document.getElementById('btn-cart-minus').addEventListener('click',function(){
    const caseNumber=document.getElementById('case-number');
    const totalCaseNumber=parseInt(caseNumber.value);
    const newTotalCaseNumber=totalCaseNumber-1;
    caseNumber.value=newTotalCaseNumber;
    const casePrice=document.getElementById('case-price');
    const previousTotalCasePrice=parseInt(casePrice.innerText);
    const newTotalCasePrice=previousTotalCasePrice-59;
     casePrice.innerText=newTotalCasePrice;

})
