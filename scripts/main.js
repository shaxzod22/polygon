var body = document.querySelector('body')
var button = document.querySelector('.toggle-theme')
var safed = document.querySelector('.safed')

button.addEventListener('click' , function(e) {
    if(e.target.click) {
      body.classList.add('dark')
    }
})

safed.addEventListener('click' , function(evt) {
    if(evt.target.click) {
       body.classList.remove('dark')
    }
})