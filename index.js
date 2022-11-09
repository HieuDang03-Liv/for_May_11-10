const mainContent = document.querySelector('#main-content')
mainContent.classList.add('hidden-content')

const loginContent = document.querySelector('.login-content-container')

function submitFunc() {
  const inputName = document.querySelector('#input-name')
  const inputValue = inputName.value
  if (inputValue === 'May' || inputValue === 'Mây') {
    loginContent.classList.add('hidden-content')
    mainContent.classList.remove('hidden-content')
  }
}
