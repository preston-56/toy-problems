// PAYE Tax
function payeTax(salary) {
  let tax;
  tax;

  if (salary >= 32333) {
    tax = salary * 0.3;
    console.log(`Your PAYE is: ${tax}`);
    return tax;
  } else if (salary >= 24001) {
    tax = salary * 0.25;
    console.log(`Your PAYE is: ${tax}`);
    return tax;
  } else if (salary <= 24000) {
    tax = salary * 0;
    console.log(`Your PAYE is: ${tax}`);
    return tax;
  }
  return tax;
};





// Export variables and functions
module.exports = {
  payeTax,
};





