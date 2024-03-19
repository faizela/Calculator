function add(num_1, num_2) {
 return num_1 + num_2
}



function subtract(num_1, num_2) {
    return num_1 - num_2
}




function multiply(num_1, num_2) {
 return num_1 * num_2
}



function divide(num_1, num_2) {
    return num_1 / num_2
}

   
let first_num
let sec_num
let operator


// operator = '-'

function operate(operator, first_num, sec_num) {
 if (operator === '+') {
    return add(first_num, sec_num)
 }
 else if (operator === '-') {
    return subtract(first_num, sec_num)
 }

 else if (operator === '*') {
    return multiply(first_num, sec_num)
 }

 else if (operator === '/') {
    return divide(first_num, sec_num)
 }
}

// console.log(operate(operator, 2, 2))