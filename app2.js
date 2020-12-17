const contactForm = document.getElementById('contact-us-form')

const entry = document.getElementById('u-entry')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const content = document.getElementById('content')

contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
  
    validateEntryEmpty(entry)
    validateEmailEmpty(email)
    validateSubjectEmpty(subject)
    validateContentEmpty(content)

    validateIsEmail(email)




})

  function validateEntryEmpty(input) {
    // console.log(entry.value)
    if (input.value === '') {
        showError(input, '❌ Please enter your name')
    } else {
        showSuccess(input, '✔️ Thank You')
    }
}

function validateEmailEmpty(input) {
    // console.log(entry.value)
    if (input.value === '') {
        showError(input, '❌ Please enter a valid Email address')
    } else {
        showSuccess(input, '✔️ Thank You')
    }
}
  
function validateSubjectEmpty(input) {
    // console.log(entry.value)
    if (input.value === '') {
        showError(input, '❌ Please enter your subject matter')
    } else {
        showSuccess(input, '✔️ Thank You')
    }
}

function validateContentEmpty(input) {
    // console.log(entry.value)
    if (input.value === '') {
        showError(input, '❌ Please enter your message')
    } else {
        showSuccess(input, '✔️ Thank You')
    }

    if (input.value.length > 50){
        showError(input, '❌ Message is too long, reduce size for submission')
    }
 }







  
    function validateIsEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

  
  

















    function showError(input, msg){
        console.log(input)
        console.log(input.nextElementSibling)
        input.nextElementSibling.innerHTML = `<small class="error">${msg}</small>`
    }
  
    function showSuccess (input, msg) {
        console.log('you are ready to submit')
        input.nextElementSibling.innerHTML = `<small class="success">${msg}</small>`
    }
