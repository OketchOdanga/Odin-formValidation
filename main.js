// match the passwords

const password = document.getElementById('password');
const repassword = document.getElementById('re-password');
const text = document.getElementById('text');
const error = document.getElementsByClassName('error');

function validate() {
    let pattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$";
    if (password.value.match(pattern) === repassword.value.match(pattern)) {
        text.innerHTML="wewe buda"
    } else{
        text.innerHTML="* Passwords do not match"
    }
}

password.addEventListener('submit',validate);