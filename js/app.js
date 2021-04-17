const loaderContainer = document.querySelector(".loader-container");

function myLoader(){
    loaderContainer.style.display = "none";
}

const searchIcon = document.querySelector(".fa-search");
const searchBar = document.querySelector(".search-bar");
searchIcon.addEventListener("click",()=>{
    searchBar.classList.toggle("search-open");
});

var type = new Typed('#typed',{
    stringsElement: '#typed-string',
    typeSpeed: 50,
    showCursor:false,
    backSpeed: 40,
    backDelay: 2000,
    loop:true
});

const nav = document.querySelector(".nav");

window.addEventListener("scroll",()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight>=navHeight){
        nav.classList.add("nav-appear");
    }else{
        nav.classList.remove("nav-appear");
    }
});

const upBtn = document.querySelector(".up-btn");

window.addEventListener("scroll",()=>{
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;
    if(scrollHeight>= navHeight){
        upBtn.style.display = "block";
    }else{
        upBtn.style.display = "none";
    }
});

const year = document.querySelector(".year");
year.innerHTML = new Date().getFullYear();

const microphone = document.querySelector(".microphone-btn");
const microphoneIcon = document.querySelector(".fa-microphone");
const microDiv = document.querySelector(".micro-on");
microphoneIcon.addEventListener("mouseenter",()=>{
    microDiv.style.display = "block";
});
microphone.addEventListener("mouseenter",()=>{
    microDiv.style.display = "block";
    if(microDiv.innerHTML === "Voice Off"){
        microDiv.innerHTML = "Click To Switch On Voice";
    }
});
microphone.addEventListener("click",()=>{
    if(microDiv.innerHTML === "Voice On"){
        microDiv.innerHTML = "Voice Off";
        microphoneIcon.style.color = "white";
        microphone.style.background = "black";
    }
    else{
        microDiv.innerHTML = "Voice On";
        microphoneIcon.style.color = "black";
        microphone.style.background = "red";
    };
});
microphone.addEventListener("mouseout",()=>{
    microDiv.style.display = "none";
});

const hamburger = document.querySelector(".fa-hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("side-bar-open");
});

const loginBtn = document.querySelector(".login-btn");
const modalMainDiv = document.querySelector(".modal_main_div");
const cross = document.querySelector(".fa-times");

loginBtn.addEventListener("click",()=>{
    modalMainDiv.classList.add("modal_main_div_show");
});

cross.addEventListener("click",()=>{
    modalMainDiv.classList.remove("modal_main_div_show");
});

const contactModal = document.querySelector(".contact_modal");
const submitBtn = document.querySelector(".submit-btn");
const contactName = document.getElementById("name");
const contactEmail = document.getElementById("email");
const contactQuery = document.getElementById("query");

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(contactName.value.length <= 3){
        contactName.classList.add("contact_error");
    }else{
        contactName.classList.remove("contact_error");
    }

    let atPosition = document.myForm.emailAddress.value.indexOf("@");
    let dotPosition = document.myForm.emailAddress.value.indexOf(".");

    if(contactEmail.value.length === 0 || atPosition < 1 || dotPosition < atPosition+2|| dotPosition+2>=document.myForm.emailAddress.value.length){
        contactEmail.classList.add("contact_error");
    }else{
        contactEmail.classList.remove("contact_error");
    }

    if(contactQuery.value.length < 3){
        contactQuery.classList.add("contact_error");
    }else{
        contactQuery.classList.remove("contact_error");
    }

    contactModal.classList.add("contact_modal_show");
    if(contactName.classList.contains("contact_error") || contactEmail.classList.contains("contact_error") || contactQuery.classList.contains("contact_error")){
        contactModal.innerHTML = "<h3>You Have error in your info.</h3>"
    }else{
        contactModal.innerHTML = "<h3>Your Response Has Been Submitted</h3>"
    }
    setTimeout(() => {
        contactModal.classList.remove("contact_modal_show");
    }, 3000);
});