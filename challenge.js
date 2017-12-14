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

window.onload = setInterval(counterIncrement, 1000) // start running function on window load

userDecrement = function() {
  const minusButton = document.getElementById('-')
  minusButton.addEventListener('click', function(){ // can take optional 'event' argument
    counterText -= 1
  })
}

userDecrement() // do this on load

userIncrement = function() {
  const plusButton = document.getElementById('+')
  plusButton.addEventListener('click', function(){ // can take optional 'event' argument
    counterText += 1
  })
}

userIncrement() // do this on load

const heartButton = document.getElementById('<3')

userLike = function() {
  let likesUL = document.getElementsByClassName('likes')
  heartButton.addEventListener('click', function(){
    userLikes.push(counterText)
  })
}

displayLikes = function() {
  let bullet = document.createElement('li')
  bullet.innerHTML = like
  likesUL[0].append(bullet)
  // debugger
}

displayLikes()
userLike()
