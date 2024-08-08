// Menu icon

const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector(".hamIcon")
const hamIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
    if (hamIcon.classList[1] === "fa-bars") {
        hamIcon.classList.add("fa-xmark")
        hamIcon.classList.remove("fa-bars")
        menuList.style.display = "block"
    } else {
        hamIcon.classList.add("fa-bars")
        hamIcon.classList.remove("fa-xmark")
        menuList.style.display = "none"
    }   
})

// Dark/Light mode

const switcher = document.querySelector(".switch input");
const themeIcon = document.querySelector(".switcher-description i");

const darkMode = () => {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
}

const lightMode = () => {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

const switchTheme = (event) => {
    console.log(event.target.checked);
    if (event.target.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        lightMode() 
    }
}

switcher.addEventListener("change", switchTheme)    

// Scroll

window.addEventListener("scroll", function(){
    let scrolled = window.scrollY
    let scrollable = document.documentElement.scrollHeight - window.innerHeight

    if (Math.ceil(scrolled) === scrollable){
        let toTop = document.querySelector(".top-page")
        toTop.style.display = "block"

        toTop.addEventListener("click", function(){
            toTop.style.display = "none"
            
        })
    }
})

// Form

// Name and Email

const form = document.querySelector("#form")
const fullName = document.querySelector(".fullName")
const email = document.querySelector(".email")
const informationfullName = document.querySelector(".information-fullName")
const informationEmail = document.querySelector(".information-email")

form.addEventListener("submit", (event) => {
    event.preventDefault()
   
    if (fullName.value === "") {
        informationfullName.style.display = "block"
    }

    if (email.value === "") {
        informationEmail.style.display = "block"
    }
})


// Password checker

const password1 = document.querySelector(".password-first")
const password2 = document.querySelector(".password-second")
const paragraphText = document.querySelector(".result-text")

password1.addEventListener("input", () => {
    const password1Value = password1.value
    const password2Value = password2.value

    if (password1Value === password2Value){
        paragraphText.textContent = "Passwords are the same"
        paragraphText.classList.add("true")
        paragraphText.classList.remove("false")
    } else {
        paragraphText.textContent = "Passwords don´t match"
        paragraphText.classList.add("false")
        paragraphText.classList.remove("true")
    }
})

password2.addEventListener("input", () => {
    const password1Value = password1.value
    const password2Value = password2.value

    if(password1Value === password2Value){
        paragraphText.textContent = "Passwords are the same"
        paragraphText.classList.add("true")
        paragraphText.classList.remove("false")
    } else {
        paragraphText.textContent = "Passwords don´t match"
        paragraphText.classList.add("false")
        paragraphText.classList.remove("true")
    }
})

// Check email

const emailInput = document.querySelector(".email")

const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

emailInput.addEventListener("input", () => {
    const emailValue = emailInput.value
    
    if (emailValue.match(pattern)){
        form.classList.add("valid")
        form.classList.remove("invalid")
        
    } else {
        form.classList.add("invalid")
        form.classList.remove("valid")
       
    } if (emailValue === ""){
        form.classList.remove("invalid")
        form.classList.remove("valid")
    }
})