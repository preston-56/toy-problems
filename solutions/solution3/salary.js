// Import variables from exported functions
const { payeTax } = require("./paye");
const { nhifDeduction } = require("./nhif");
const { nssfContribution} = require("./nssf");

// Net Salary Calculator
const prompt = require("prompt-sync")();
const salary = parseInt(prompt("Enter Monthly Gross Salary:"));


function netSalary() {
    if (!Number.isInteger(salary)) {
        console.log("Please enter an Integer!")
    }
  
  const nssf = nssfContribution(salary);
  const nhif = nhifDeduction(salary);
  const payee = payeTax(salary);
  const net = salary - nssf - nhif - payee;
  return {
    gross: salary,
    net,
    payee,
    nhif,
    nssf,
  }
};

netSalary();

console.log(netSalary());
