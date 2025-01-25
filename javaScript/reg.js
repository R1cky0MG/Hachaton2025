const passwordInput = document.getElementById('password')
const confirmPasswordInput = document.getElementById('confirm-password')
const errorMessage = document.getElementById('error-message')

const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')

document
	.getElementById('register-form')
	.addEventListener('submit', function (event) {
		let hasError = false

		// Проверяем совпадение паролей
		if (passwordInput.value !== confirmPasswordInput.value) {
			errorMessage.style.display = 'block'
			hasError = true
		} else {
			errorMessage.style.display = 'none'
		}

		// Проверяем, чтобы поля "Имя" и "Фамилия" не были пустыми
		if (firstNameInput.value.trim() === '') {
			alert('Введите ваше имя')
			hasError = true
		}

		if (lastNameInput.value.trim() === '') {
			alert('Введите вашу фамилию')
			hasError = true
		}

		if (hasError) {
			event.preventDefault()
		}
	})
