
const prompt = require("prompt-sync")();

// Import variables
const { payeTax } = require("./paye");
const { nhifDeduction } = require("./nhif");
const { nssfPension } = require("./nssf");

const salary = parseInt(prompt("Enter Monthly Gross Salary:"));
// Net Salary Calculator
function netSalary() {
    if (!Number.isInteger(salary)) {
        console.log("Please enter an Integer!")
    };
  
  const nssf = nssfPension(salary);
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

console.log(netSalary());
