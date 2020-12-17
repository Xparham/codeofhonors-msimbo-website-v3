const contactForm = document.getElementById('contact-us-form')

const entry = document.getElementById('u-entry')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const content = document.getElementById('content')

contactForm.addEventListener('submit', function (e) {
    e.preventDefault()
  
    validateEmpty(entry)
    validateEmpty(email)
    validateEmpty(subject)
    validateEmpty(content)


    validateMinLength(u-name)
  

    validateIsEmail(email)
   


    validateMinLength(password, password2)
  })

  function validateEmpty(entry) {
    console.log(entry)
    if (entry.value === '') {
        showError(entry)
    } else {
        showSuccess(entry)
    }
  }

  function validateEmpty(email) {
    console.log(email)
    if (email.value === '') {
        showError(email)
    } else {
        showSuccess(email)
    }
  }

  function validateEmpty(subject) {
    console.log(subject)
    if (subject.value === '') {
        showError(subject)
    } else {
        showSuccess(subject)
    }
  }

  function validateEmpty(content) {
    console.log(content)
    if (content.value === '') {
        showError(content)
    } else {
        showSuccess(content)
    }
  }














  function showError(input){
    // steps to do this...
    console.log(input)
    console.log(input.nextElementSibling)
  input.nextElementSibling.innerHTML = '<small class="error"> ❌ Please enter your username </small>'
    }
  
  function showSuccess (input) {
    console.log('you are ready to submit')
  input.nextElementSibling.innerHTML = '<small class="success"> ✔️ Success </small>'
  }