var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText ='';
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input=>{
        input.value = input.value.trim()

        if(!input.value){
            isEmptyError = true;
            showError(input, 'Không được để trống')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkEmailError(input){
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if(!isEmailError){
        showSuccess(input);
    }
    else{
        showError(input, "Email invalid");
    }
    return isEmailError
}

function checkLengthError(input, min, max){
    input.value = input.value.trim();
    if(input.value.length < min){
        showError(input, `Phải có  ít nhất ${min} ký tự`);
        return true
    }
    if(input.value.length > max){
        showError(input,`Không được quá ${max} ký tự`);
        return true
    }
    
    return false
}
function checkMatchPasswordError(passwordInput, cfPasswordInput){
    if(passwordInput.value != cfPasswordInput.value){
        showError(cfPasswordInput, 'Mật khẩu không trùng khớp')
        return true
    }
    return false

}
form.addEventListener('submit', function(e){
    e.preventDefault();
    let isEmptyError = checkEmailError(username, email, password, confirmPassword);
    let isEmailError = checkEmailError(email);
    let isUsernameLengthError = checkLengthError(username, 8, 30);
    let ispasswordLengthError = checkLengthError(password, 8, 12);
    let isMatchError = checkMatchPasswordError(password,confirmPassword);

    if(isEmptyError || isEmailError || isUsernameLengthError||ispasswordLengthError ||isMatchError)
    {//do nothing
    }
    else{
        //call API...
    }
})



