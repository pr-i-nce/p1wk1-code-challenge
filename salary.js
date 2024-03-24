;function main() {
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));

    const netSalary = calculateNetSalary(basicSalary, benefits);
//Calculate PAYE
function calculatePAYE(basicSalary) {
    const taxBrackets = [
        { amount: 24000, rate: 0.1 },
        { amount: 16000, rate: 0.15 },
        { amount: 16000, rate: 0.2 },
        { amount: 0, rate: 0.25 }
    ];
    let tax = 0;
    let taxableIncome = basicSalary - 24000; 
    for (const bracket of taxBrackets) {
        if (taxableIncome > 0) {
            const { amount, rate } = bracket;
            const taxableAmount = Math.min(taxableIncome, amount);
            tax += taxableAmount * rate;
            taxableIncome -= taxableAmount;
        }
    }
    return tax;
}
//calculace NHIF BASED ON SALARY
function calculateNHIF(basicSalary) {
    const nhifRates = [
        { amount: 6000, deduction: 150 },
        { amount: 8000, deduction: 300 },
        { amount: 12000, deduction: 400 },
        { amount: 18000, deduction: 500 },
        { amount: 25000, deduction: 600 },
        { amount: 35000, deduction: 750 },
        { amount: 45000, deduction: 850 },
        { amount: 60000, deduction: 900 },
        { amount: 75000, deduction: 950 },
        { amount: 75001, deduction: 1000 }
    ];
    for (const { amount, deduction } of nhifRates) {
        if (basicSalary <= amount) {
            return deduction;
        }
    }
    return 1000; 
}

function calculateNSSF(basicSalary) {
    const nssfRate = 0.06; 
    return Math.min(basicSalary * nssfRate, 2000); 
}

function calculateNetSalary(basicSalary, benefits) {
    const paye = calculatePAYE(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const deductions = paye + nhif + nssf;
    const netSalary = grossSalary - deductions;
    return netSalary;
}

console.log(`\nGross Salary: ${basicSalary + benefits}`);
    console.log(`PAYE (Tax): ${calculatePAYE(basicSalary)}`);
    console.log(`NHIF Deductions: ${calculateNHIF(basicSalary)}`);
    console.log(`NSSF Deductions: ${calculateNSSF(basicSalary)}`);
    console.log(`Net Salary: ${netSalary}`);
}

main();
