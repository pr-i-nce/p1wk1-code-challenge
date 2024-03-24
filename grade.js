function gradeMarks() {
  // Get the input element
  let userInput = document.getElementById("marksInput");
  
  // Get the grade element
  let grade = document.getElementById("grade");
  
  // Get the marks value from the input element
  let marks = parseFloat(marksInput.value);
  
  // To check if the entry is  a number
  if (isNaN(marks) || marks < 0 || marks > 100) {
      // If the input is not a number within the range of 0 to 100, display an error message
      grade.textContent = 'Invalid entry. Marks should be between 0 and 100.';
  } else {
      // Determine the grade according to the input marks
      if (marks > 79) {
          grade.textContent = 'Excellent!!! You managed to score an A !!!';
      } else if (marks >= 60) {
          grade.textContent = 'Good work!! You managed to score a B!!';
      } else if (marks >= 50) {
          grade.textContent = 'Almost there! Keep working.You managed to score a C';
      } else if (marks >= 40) {
          grade.textContent = 'Aim higher.You scored a D';
      } else {
          grade.textContent = 'Aim higher.You scored an E';
      }
  }
}

