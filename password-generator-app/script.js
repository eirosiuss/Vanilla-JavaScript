const slider = document.getElementById('range')
const value = document.getElementById('value')
value.textContent = slider.value

const handleLengthChange = (e) => value.textContent = e.target.value
slider.addEventListener('input', (e) => handleLengthChange(e))

const password = document.getElementById('password')
const generateBtn = document.getElementById('generate')
const lowercaseCheckbox = document.getElementById('lowercase')
const uppercaseCheckbox = document.getElementById('uppercase')
const numbersCheckbox = document.getElementById('numbers')
const symbolsCheckbox = document.getElementById('symbols')
const strengthIndicator = document.querySelector('.strength-container span')
const copyText = document.querySelector('.password-container span')
const copyBtn = document.querySelector('.password-container button')

const handleGeneratePassword = () => {
  const passwordLength = slider.value
  const lowercaseSet = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbersSet = "0123456789"
  const symbolsSet = "!@#$%^&*()_+[]{}|;:,.<>?/~`"
  const selectedSets = []
  let passwordValue = []

  if (lowercaseCheckbox.checked) selectedSets.push(lowercaseSet)
  if (uppercaseCheckbox.checked) selectedSets.push(uppercaseSet)
  if (numbersCheckbox.checked) selectedSets.push(numbersSet)
  if (symbolsCheckbox.checked) selectedSets.push(symbolsSet)

  const allChars = selectedSets.join('')

  if (slider.value < selectedSets.length) {
    alert(`Password length must be at least ${selectedSets.length} to include all selected character types.`)
    return
  }

  selectedSets.forEach(set => {
    const char = set[Math.floor(Math.random() * set.length)]
    passwordValue.push(char)
  })

  for (let i = passwordValue.length; i < passwordLength; i++) {
    const char = allChars[Math.floor(Math.random() * allChars.length)]
    passwordValue.push(char)
  }

  // Fisher-Yates shuffle algorithm to randomize the password characters
  for (let i = passwordValue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
      ;[passwordValue[i], passwordValue[j]] = [passwordValue[j], passwordValue[i]]
  }
  password.value = passwordValue.join('')

  if (password.value.length <= 5 || selectedSets.length === 1) {
    strengthIndicator.textContent = 'Too Weak!'
  } else if ((password.value.length <= 10 && password.value.length > 5) || selectedSets.length === 2) {
    strengthIndicator.textContent = 'Weak'
  } else if ((password.value.length <= 15 && password.value.length > 10) || selectedSets.length === 3) {
    strengthIndicator.textContent = 'Medium'
  } else if (password.value.length > 15 || selectedSets.length === 4) {
    strengthIndicator.textContent = 'Strong'
  }
}

copyBtn.addEventListener('click', () => {
  if (password.value) {
    navigator.clipboard.writeText(password.value)
    copyText.textContent = 'Copied!'
  } else {
    alert('Please generate a password first.')
  }
})

generateBtn.addEventListener('click', () => {
  if (slider.value < 1 || slider.value > 30) {
    alert('Please select a length between 1 and 30.')
    return
  } else if (![lowercaseCheckbox, uppercaseCheckbox, numbersCheckbox, symbolsCheckbox].some(cb => cb.checked)
  ) {
    alert('Please select at least one character type.')
    return
  }

  copyText.textContent = ''
  password.classList.add('text-grey-200')
  handleGeneratePassword()
})