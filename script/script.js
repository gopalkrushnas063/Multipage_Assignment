
// Function to show the next step in the form
function nextStep(step) {
    document.getElementById('step' + step).style.display = 'none';
    document.getElementById('step' + (step + 1)).style.display = 'block';
}

// Function to show the previous step in the form
function prevStep(step) {
    document.getElementById('step' + step).style.display = 'none';
    document.getElementById('step' + (step - 1)).style.display = 'block';
}
