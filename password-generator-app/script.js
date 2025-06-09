const slider = document.getElementById('range')
const value = document.getElementById('value')
value.textContent = slider.value

const handleLengthChange = (e) => value.textContent = e.target.value

slider.addEventListener('input', (e) => handleLengthChange(e))

const password = document.getElementById('password')
const generateBtn = document.getElementById('generate')


const handleGeneratePassword = () => {
  const length = slider.value
  const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
  let passwordValue = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * lowercaseSet.length)
    passwordValue += lowercaseSet[randomIndex]
  }

  password.value = passwordValue
}

generateBtn.addEventListener('click', handleGeneratePassword)
