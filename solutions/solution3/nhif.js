// NHIF Deductions
function nhifDeduction(salary) {
  if (salary > 100000) {
    const nhifMonthly = 1700;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  else if (salary >= 90000) {
    const nhifMonthly = 1600;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 80000) {
    const nhifMonthly = 1500;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 70000) {
    const nhifMonthly = 1400;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 60000) {
    const nhifMonthly = 1300;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 50000) {
    const nhifMonthly = 1200;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 45000) {
    const nhifMonthly = 1100;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 40000) {
    const nhifMonthly = 1000;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 35000) {
    const nhifMonthly = 950;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 30000) {
    const nhifMonthly = 900;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 25000) {
    const nhifMonthly = 850;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 20000) {
    const nhifMonthly = 750;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 15000) {
    const nhifMonthly = 600;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 12000) {
    const nhifMonthly = 500;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 8000) {
    const nhifMonthly = 400;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary >= 6000) {
    const nhifMonthly = 300;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  } 
  
  else if (salary < 5999) {
    const nhifMonthly = 150;
    console.log(`Your NHIF Deduction is: ${nhifMonthly}`);
    return nhifMonthly;
  }
};

// Export variables and functions
module.exports = {
  nhifDeduction,
};

