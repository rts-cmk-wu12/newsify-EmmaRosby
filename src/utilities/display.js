const splashScreen = document.querySelector('#splashScreen'); 
const onboarding = document.querySelector('#onboarding');

const duration = 5000

function splashScreenNoDisplay(){
    splashScreen.style.display = "none"
}

function onboardingNoDisplay(){
    onboarding.style.display = "none"
}
onboardingNoDisplay()

function onboardingDisplay(){
    onboarding.style.display = "flex"
}

setTimeout(function() {
    splashScreenNoDisplay();
    onboardingDisplay();
}, duration);
