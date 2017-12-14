// To begin comment out the script tag linking to index.min.js in the html file.
// Write your code in challenge.js
//
// As a user, i should see the timer increment every second once the page has loaded
// As a user, i can manually increment and decrement the counter as i like
// As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
// As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
// As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"



let counter = document.getElementById('counter') // grab the element by ID
let counterText = parseInt(counter.innerHTML) // grabbed its innerHTML and turned it into an int

counterIncrement = function() {
  counterText = counterText + 1 // incremented the variable by 1
  document.getElementById('counter').innerHTML = counterText // then reset the text
}

let startCount = setInterval(counterIncrement, 1000)
window.onload = startCount // start running function on window load

const minusButton = document.getElementById('-')
userDecrement = function() {
  minusButton.addEventListener('click', function(){ // can take optional 'event' argument
    counterText -= 1
  })
}

userDecrement() // do this on load

const plusButton = document.getElementById('+')
userIncrement = function() {
  plusButton.addEventListener('click', function(){ // can take optional 'event' argument
    counterText += 1
  })
}

userIncrement() // do this on load

const heartButton = document.getElementById('<3')
userLike = function() {
  let likesObj = {}
  let likesUL = document.getElementsByClassName('likes')
  heartButton.addEventListener('click', function (){
    if (likesObj[counterText]) {
      likesObj[counterText] += 1
      let bullet = document.getElementById(counterText)
      bullet.innerHTML = `${counterText} has been liked ${likesObj[counterText]} times`
      console.log(likesUL[0], bullet)
    } else {
      likesObj[counterText] = 1
      let bullet = document.createElement('li')
      bullet.setAttribute('id', counterText)
      bullet.innerHTML = `${counterText} has been liked ${likesObj[counterText]} times`
      likesUL[0].append(bullet)
    }
  })
}

userLike()

submitButton = document.getElementById('submit')
pauseButton = document.getElementById('pause')

pauseButton.addEventListener('click', function() {
  if (pauseButton.innerText === 'pause') {
    pauseButton.innerText = 'resume'
    plusButton.disabled = true
    minusButton.disabled = true
    heartButton.disabled = true
    submitButton.disabled = true
    clearInterval(startCount)
  } else if (pauseButton.innerText === 'resume') {
    setInterval(counterIncrement, 1000) // EXPLORE THIS ***************
    pauseButton.innerText = 'pause'
    plusButton.disabled = false
    minusButton.disabled = false
    heartButton.disabled = false
    submitButton.disabled = false
  }
})

form = document.getElementById("comment-form")
form.addEventListener('submit', function(e) {
  e.preventDefault()
  let input = document.getElementsByTagName('input')
  let content = input[0].value
  let commentDiv = document.getElementById("list")
  commentDiv.innerHTML = commentDiv.innerHTML + `<p>${content}<p>`
})
