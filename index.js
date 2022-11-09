const HIDDEN_CLASS = 'hidden-content'
const mainContent = document.querySelector('#main-content')
// const mainContent = document.querySelector('.good-morning')
// mainContent.classList.add(HIDDEN_CLASS)

const loginContent = document.querySelector('.login-content-container')

let errorTimesCount = 0

const cloudContainer = document.querySelector('.cloud-container')
setInterval(() => {
  const cloud = document.createElement('div')
  cloud.className = 'cloud'
  const number = Math.floor(Math.random() * 90)
  cloud.style.left = `${number}vw`
  cloudContainer.appendChild(cloud)
  setTimeout(() => {
    cloudContainer.removeChild(cloud)
  }, 10000)
}, 2500)

function submitFunc() {
  const inputName = document.querySelector('#input-name')
  const inputValue = inputName.value
  const errorMsg = document.querySelector('.error-msg')
  const requiredMsg = document.querySelector('.required-msg')
  if (inputValue === 'May' || inputValue === 'Mây') {
    // loginContent.classList.add(HIDDEN_CLASS)
    document.body.removeChild(loginContent)
    mainContent.classList.remove(HIDDEN_CLASS)
  } else if (inputValue === '') {
    requiredMsg.classList.remove(HIDDEN_CLASS)
  } else {
    errorTimesCount++
    requiredMsg.classList.add(HIDDEN_CLASS)
    if (errorTimesCount > 5) {
      errorMsg.classList.add(HIDDEN_CLASS)
      const answerMsg = document.querySelector('.answer-msg')
      answerMsg.classList.remove(HIDDEN_CLASS)
    } else {
      errorMsg.classList.remove(HIDDEN_CLASS)
    }
  }
}
