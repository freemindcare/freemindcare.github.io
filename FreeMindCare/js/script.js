
function highlightCard(card) {
    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(c => {
        c.classList.remove('selected'); 
        c.classList.remove('active');   
    });
    
    card.classList.add('selected'); 
    card.classList.toggle('active'); 
}

const getStartedBtn = document.getElementById('get-started-btn');
const popupBox = document.getElementById('popup-box');
const closeBtn = document.getElementById('close-btn');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginSuccess = document.getElementById('login-success');
const signupSuccess = document.getElementById('signup-success');
const errorMsg = document.getElementById('error-msg');


let registeredUser = {};


getStartedBtn.addEventListener('click', () => {
    popupBox.classList.add('active');
});


closeBtn.addEventListener('click', () => {
    popupBox.classList.remove('active');
});


signupLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    errorMsg.style.display = 'none'; 
});


loginLink.addEventListener('click', () => {
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
    errorMsg.style.display = 'none'; 
});


signupBtn.addEventListener('click', () => {
    const fullName = signupForm.querySelector('input[type="text"]').value;
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;

    
    registeredUser = { fullName, email, password };

    
    signupSuccess.textContent = 'Signed up successfully! Now you can log in.';
    signupSuccess.style.display = 'block';

    
    signupForm.reset();

    
    setTimeout(() => {
        signupSuccess.style.display = 'none';
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    }, 2000);
});


loginBtn.addEventListener('click', () => {
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

   
    if (registeredUser.email === email && registeredUser.password === password) {
        
        loginSuccess.textContent = 'Logged in successfully!';
        loginSuccess.style.display = 'block';
        errorMsg.style.display = 'none'; 

        
        setTimeout(() => {
            popupBox.classList.remove('active');  
            loginSuccess.style.display = 'none'; 
            loginForm.reset();  
        }, 1500);
    } else {
        
        errorMsg.textContent = 'Incorrect username or password.';
        errorMsg.style.display = 'block'; 
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   

    
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';

    
    this.reset();


    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);
});
