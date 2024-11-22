const name = document.getElementById('name')
const pass = document.getElementById('pass')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer that 6 characters')
    }

    if (password.value.length >= 20) {
        messages.push('Password must be less that 20 characters')
    }

    if (password.value === 'password') {
        messages.push('Password canot be password')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement, innerText = messages.join(', ')
    }

})