/* 
##############################################
              GLOBAL VARIABLE
##############################################
*/

let milliseconds = 0;
const delayInMilliseconds = 1;
const output = document.createElement('div');
output.innerText = milliseconds;


/* 
##############################################
                TIMER FUNCTION
##############################################
*/
const ref = setInterval(() => {
  output.innerText = milliseconds;
  milliseconds += 1;

  if (milliseconds > 5000) {
    clearInterval(ref);
  }
}, delayInMilliseconds);
document.body.appendChild(output);
