const splashScreen = document.querySelector('#splashScreen'); 
const onboarding = document.querySelector('#onboarding');

const duration = 5000




function splashScreenNoDisplay(){
    splashScreen.style.display = "none"
}

function onboardingDisplay(){
    onboarding.style.display = "flex"
}

setTimeout(function() {
    splashScreenNoDisplay();
    onboardingDisplay();
}, duration);