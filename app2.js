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

    validateIsEmail(email)


    validateMinLength(entry)
    validateMinLength(content)
    validateMinLength(subject)

  

    validateIsEmail(email)
   


   
  })

  function validateEmpty(entry) {
    console.log(entry)
    if (entry.value === '') {
        showError(entry)
    } else {
        showSuccess(entry)
    }
  }

//   function validateEmpty(email) {
//     console.log(email)
//     if (email.value === '') {
//         showError(email)
//     } else {
//         showSuccess(email)
//     }
//   }

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

  
    function validateIsEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

  
    function validateMinLength(entry) {
        console.log(entry)
        if(entry.value.length < 4 ) {
            showError(entry)
        }
        else {
            showSuccess(entry)
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