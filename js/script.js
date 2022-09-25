const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg
}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
        if(el.value === ""){
            showError(el, el.placeholder)
        } else {
            clearError(el)
        }
    })
}

const checkLength = (input, minLength) => {
    if(input.value.length < minLength) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} must have at least ${minLength} characters`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Password dosen\'t match')
    }
}

const checkMail = email => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(re.test(email.value)){
        clearError(email)
    } else {
        showError(email, 'Incorrect email')
    }
    
}

sendBtn.addEventListener('click', (event) => {
    event.preventDefault();

    checkForm([username, pass, pass2, email])
    checkLength(username, 3)
    checkLength(pass, 8)
    checkPassword(pass, pass2)
    checkMail(email)
})

clearBtn.addEventListener('click', (event) => {
    event.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = "";
    })
})