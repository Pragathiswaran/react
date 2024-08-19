let myVariable = 1000;

const intervalId = setInterval(() => {
  console.log('Variable after 4 seconds:', myVariable);

  // Increment myVariable
  myVariable++;

  // If you want to stop the loop after a certain condition, you can check it here
  // For example, stop the loop after myVariable reaches 1010
//   if (myVariable === ) {
//     clearInterval(intervalId);
//   }
}, 4000);
