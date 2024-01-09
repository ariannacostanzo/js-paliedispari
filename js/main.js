// * Palindroma

const form = document.querySelector('form');
const inputElement = document.querySelector('input');
const resultElement = document.getElementById('result');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    resultElement.innerText = '';
    message = 'La tua parola non è palindrama!';

    const wordFromUser = inputElement.value;
    logSomething(wordFromUser);
    
    //! Validazione 

    if (!wordFromUser) {
        message = 'Devi inserire una parola!';    
    }

    if (wordFromUser && isPalindrome(wordFromUser)) {
        message = 'La tua parola è palindrama!'
    }

    
    resultElement.innerText = message;

});



