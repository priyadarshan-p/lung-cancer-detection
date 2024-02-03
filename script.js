function detectCancer() {
    const age = parseInt(document.getElementById('age').value);
    const smokingHistory = parseInt(document.getElementById('smokingHistory').value);
    const chronicCough = document.getElementById('chronicCough').value;
    const shortnessOfBreath = document.getElementById('shortnessOfBreath').value;
    const chestPain = document.getElementById('chestPain').value;

    // Simple scoring system for demo purposes
    let score = 0;

    if (age > 50) {
        score += 2;
    }

    if (smokingHistory > 20) {
        score += 3;
    }

    if (chronicCough === 'yes') {
        score += 2;
    }

    if (shortnessOfBreath === 'yes') {
        score += 3;
    }

    if (chestPain === 'yes') {
        score += 4;
    }

    // Determine the result based on the score
    let result = '';
    let resultColor = '';

    if (score >= 10) {
        result = 'High Risk: You may be at significant risk. Please consult a doctor immediately.';
        resultColor = 'red';
    } else if (score >= 5) {
        result = 'Moderate Risk: It is recommended to consult a doctor for further evaluation.';
        resultColor = 'orange';
    } else {
        result = 'Low Risk: You are likely not at significant risk, but regular check-ups are advisable.';
        resultColor = 'green';
    }

    // Display the result to the user with color grading
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = result;
    resultElement.style.color = resultColor;
}
