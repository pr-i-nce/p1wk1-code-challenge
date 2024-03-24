function speedDetector() {
    // Get the input element
    let speedInput = document.getElementById("speedInput");
    
    // Get the output element
    let output = document.getElementById("output");
    
    // Get the speed value from the input element
    let speed = parseInt(speedInput.value);
    
    // Initialize demerit points
    let demeritPoints = 0;
    
    // To check if the entry is a number
    if (isNaN(speed) || speed < 0) {
        // If the input is not a positive number, display an error message
        output.textContent = 'Invalid entry. Speed should be a positive number.';
    } else { 
        if (speed <= 70) {
            output.textContent = 'Ok';
        } else {
            // Calculate demerit points
            demeritPoints = Math.floor((speed - 70) / 5);
            
            // Display demerit points
            output.textContent = 'Drivers points = ' + demeritPoints;
            
            // Check if license should be suspended
            if (demeritPoints > 12) {
                output.textContent += ', license suspended';
            }
        }
    }
}
