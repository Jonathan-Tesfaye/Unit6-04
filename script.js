// These are the variables going to be used
let a = 0
let b = 0
let c = 0
let answer = 0

document.getElementById('button').addEventListener('click', formula)

function formula () {
  // I am linking the variables to the input
  a = document.getElementById('a-value').value
  b = document.getElementById('b-value').value
  c = document.getElementById('c-value').value
  // I am making a string for the variables to be numbers
  a = parseInt(a)
  b = parseInt(b)
  c = parseInt(c)
  // This is the formula to find the area of the trapezoid
  answer = (a + b) / 2 * c
  document.getElementById('answers').innerHTML = answer
}
