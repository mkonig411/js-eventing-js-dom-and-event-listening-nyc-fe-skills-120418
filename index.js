const main = document.getElementById('main')
 
main.addEventListener('click', function(event) {
  alert('I was clicked!')
})

const input = document.querySelector('input')
input.addEventListener('keydown', e => console.log(e.which))

const input = document.querySelector('input')
 
input.addEventListener('keydown', e => {
  if (e.which === 71) {
    return e.preventDefault()
  }
})