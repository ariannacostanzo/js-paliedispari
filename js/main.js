
// TODO Prendo gli elementi dalla pagina che mi servono
// TODO Raccolgo i dati degli input
// TODO Sommo i numeri dell'user e del computer
// TODO Scrivo in pagina il risultato

const userChoiceElement = document.getElementById('pari-o-dispari');
const userNumberElement = document.getElementById('user-number');
const form = document.querySelector('form');
const resultElement = document.getElementById('result');
const errorElement = document.getElementById('error-message');
const youWin = document.getElementById('winner');
const youLose = document.getElementById('lose');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userChoice = userChoiceElement.value;
    const userNumber = parseInt(userNumberElement.value);
    const CPUNumber = getRandomInteger(); 
    let oddOrEvenMessage = 'dispari';
    let message = '';
    let errorMessage = '';

    logSomething(userChoice);
    logSomething(userNumber);
    logSomething(CPUNumber);

    // ! Validazione

    if (userChoice === 'Scegli') {
        errorMessage = 'Devi scegliere tra pari e dispari!';
        errorElement.innerText = errorMessage;
        resultElement.innerText = '';
        return;

    } else if (isNaN(userNumber) || userNumber > 5 || userNumber < 0) {
        errorMessage = 'Devi inserire un numero tra 1 e 5!'
        errorElement.innerText = errorMessage;
        resultElement.innerText = '';
        return;
        
    } 


    errorElement.innerText = ''
    
    const sum = userNumber + CPUNumber;
    const isEven = isSumEven(userNumber, CPUNumber);

    if (isEven) {
        oddOrEvenMessage = 'pari';
    }

    message = `Il tuo numero è <strong>${userNumber}</strong>; il numero della CPU è <strong>${CPUNumber}</strong>. <br>
    La loro somma è <strong>${sum}</strong> ed è <strong>${oddOrEvenMessage}</strong>!`;

    if (userChoice === oddOrEvenMessage) {
        message += `<br>Hai scelto <strong>${userChoice}</strong>, dunque hai <strong>vinto</strong>!`
        youLose.classList.add('d-none');
        youWin.classList.remove('d-none');
    }   else {
        message += `<br>Hai scelto <strong>${userChoice}</strong>, dunque hai <strong>perso</strong>!`
        youWin.classList.add('d-none');
        youLose.classList.remove('d-none');
    }

    resultElement.innerHTML = message;
    
    
})