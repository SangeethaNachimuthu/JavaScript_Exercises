let bmiBtn = document.getElementById('bmi-btn');
let displayBMI = document.getElementById('display-bmi');

bmiBtn.addEventListener('click', () => {
    let weight = prompt("Enter your weight(in kg): ");
    let height = prompt("Enter your height(in cm): ");
    let heightInCM = height / 100;

    let bmi = weight / (heightInCM * heightInCM);

    let bmiStatus = findBMIStatus(bmi.toFixed(1));

    displayBMI.innerHTML = `<span>Your BMI is ${bmi.toFixed(1)}</span>
                            <p>You are ${bmiStatus}</p>`;
})

function findBMIStatus(bmi) {
    let bmiStatus;
    if(bmi < 18.5) {
         bmiStatus = 'Underweight';
    } else if (bmi > 18.5 && bmi < 24.9) {
        bmiStatus = 'Normal';
    } else if (bmi > 25 && bmi < 29.9) {
        bmiStatus = 'Overweight';
    } else if (bmi > 30) {
        bmiStatus = 'Obese';
    }
    return bmiStatus;
}