// NHIF Deductions
function nhifDeduction(salary) {
  let  nhifMonthly;
  nhifMonthly;

  if (salary > 100000) {
    nhifMonthly = 1700;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  else if (salary >= 90000) {
    nhifMonthly = 1600;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 80000) {
    nhifMonthly = 1500;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 70000) {
    nhifMonthly = 1400;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 60000) {
    nhifMonthly = 1300;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 50000) {
    nhifMonthly = 1200;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 45000) {
    nhifMonthly = 1100;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 40000) {
    nhifMonthly = 1000;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 35000) {
    nhifMonthly = 950;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 30000) {
    nhifMonthly = 900;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 25000) {
    nhifMonthly = 850;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 20000) {
    nhifMonthly = 750;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 15000) {
    nhifMonthly = 600;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 12000) {
    nhifMonthly = 500;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 8000) {
    nhifMonthly = 400;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 6000) {
    nhifMonthly = 300;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary <= 5999) {
    nhifMonthly = 150;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  }
return salary;
};

// Export variables and functions
module.exports = {
  nhifDeduction,
};

