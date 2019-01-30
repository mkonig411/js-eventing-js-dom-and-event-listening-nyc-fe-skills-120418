//triggers alert
const main = document.getElementById('main')
 
main.addEventListener('click', function(event) {
  alert('I was clicked!')
})
//logs keycode for every letter
//const input = document.querySelector('input')
//input.addEventListener('keydown', e => console.log(e.which))

//hides letter g (keycode = 71) other related event properties are stopPropagation
const input = document.querySelector('input')
 
input.addEventListener('keydown', e => {
  if (e.which === 71) {
    return e.preventDefault()
  }
})