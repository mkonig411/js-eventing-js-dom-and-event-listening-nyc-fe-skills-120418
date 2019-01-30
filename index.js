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

const divs = document.querySelectorAll('div')
 
function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation()
 
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (const aDiv of divs) {
  aDiv.addEventListener('click', bubble)
}
divs = document.querySelectorAll('div')
 
function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured')
}
 
for (const aDiv of divs) {
  // set the third argument to `true`!
  aDiv.addEventListener('click', capture, true)
}