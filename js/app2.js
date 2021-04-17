const loaderContainer = document.querySelector(".loader-container");

function myLoader(){
    loaderContainer.style.display = "none";
}

const loginBtn = document.querySelector(".login-form-btn");
const userCheck = document.querySelector(".user-check");
const userError = document.querySelector(".user-error");
const userErrorMessage = document.querySelector("form .user_error_message");
const emailErrorMessage = document.querySelector("form .email_error_message");
const passwordErrorMessage = document.querySelector("form .password_error_message");
const cpasswordErrorMessage = document.querySelector("form .cpassword_error_message");
const emailCheck = document.querySelector(".email-check");
const emailError = document.querySelector(".email-error");
const passwordCheck = document.querySelector(".password-check");
const cpasswordCheck = document.querySelector(".cpassword-check");
const passwordError = document.querySelector(".password-error");
const cpasswordError = document.querySelector(".cpassword-error");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");
const modal = document.querySelector(".modal");
const modalIcon = document.querySelector(".modal_icon_div");

function success(main, check,error,errorMessage){
    main.classList.add("success");
    check.classList.add("icon_success");
    main.classList.remove("error");
    error.classList.remove("icon_error");
    errorMessage.classList.remove("error_message_show");
}

function error(main,check,error,errorMessage){
    main.classList.add("error");
    error.classList.add("icon_error");
    main.classList.remove("success");
    check.classList.remove("icon_success");
    errorMessage.classList.add("error_message_show");
}

loginBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(userName.value.length > 3){
        success(userName, userCheck, userError, userErrorMessage);
    }else{
        error(userName, userCheck, userError, userErrorMessage);
    }

    let atPosition = document.myForm_signin.userEmail_signin.value.indexOf("@");
    let dotPosition = document.myForm_signin.userEmail_signin.value.indexOf(".");

    if(email.value.length === 0 || atPosition<1 || dotPosition < atPosition+2|| dotPosition+2>=document.myForm_signin.userEmail_signin.value.length){
        error(email, emailCheck, emailError, emailErrorMessage);
    }else{
        success(email, emailCheck, emailError, emailErrorMessage);
    }

    if(password.value.length > 7){
        success(password, passwordCheck, passwordError, passwordErrorMessage);
    }else{
        error(password, passwordCheck, passwordError, passwordErrorMessage);
    }

    if(cpassword.value === password.value && cpassword.value.length>7){
        success(cpassword, cpasswordCheck, cpasswordError, cpasswordErrorMessage);
    }else{
        error(cpassword, cpasswordCheck, cpasswordError, cpasswordErrorMessage);
    }

    if(userName.classList.contains("success")&&email.classList.contains("success")&&password.classList.contains("success")&&cpassword.classList.contains("success")){
        modal.classList.add("modal_open");
        modalIcon.classList.add("modal_icon_div_rotate");
    }
});