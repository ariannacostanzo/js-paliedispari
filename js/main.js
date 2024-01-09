// * Palindroma

const form = document.querySelector('form');
const inputElement = document.querySelector('input');
const resultElement = document.getElementById('result');


form.addEventListener('submit', function(e) {
    e.preventDefault();
    message = 'La tua parola non è palindrama!';

    const wordFromUser = inputElement.value;
    // logSomething(wordFromUser);
    
    //! Validazione 

    if (!wordFromUser) {
        message = 'Devi inserire una parola!';    
    }

    //ho ripetuto il check sull'input perchè uno spazio vuoto è palindromo
    if (wordFromUser && isPalindrome(wordFromUser)) {
        message = 'La tua parola è palindrama!'
    }

    resultElement.innerText = message;

});



