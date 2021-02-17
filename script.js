let a = 0
let b = 0
let c = 0

document.getElementById ('button').addEventListener ('click', formula)

function formula () {

  a = document.getElementById('a-value').value
  
  b = document.getElementById('b-value').value

  c = document.getElementById('c-value').value

  a = parseInt(a)

  b = parseInt(b)

  c = parseInt(c)

  button = (a + b)/2 * c

  alert(button)
}
