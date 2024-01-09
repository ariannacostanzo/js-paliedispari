
// TODO Prendo gli elementi dalla pagina che mi servono
// TODO Raccolgo i dati degli input
// TODO Sommo i numeri dell'user e del computer
// TODO Scrivo in pagina il risultato

const userChoiceElement = document.getElementById('pari-o-dispari');
const userNumberElement = document.getElementById('user-number');
const form = document.querySelector('form');
const resultElement = document.getElementById('result')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userChoice = userChoiceElement.value;
    const userNumber = parseInt(userNumberElement.value);
    const CPUNumber = getRandomInteger(); 
    let oddOrEvenMessage = 'dispari';
    let message = ''

    logSomething(userChoice);
    logSomething(userNumber);
    logSomething(CPUNumber);

    const sum = userNumber + CPUNumber;
    const isEven = isSumEven(userNumber, CPUNumber);

    if (isEven) {
        oddOrEvenMessage = 'pari'
    }

    message = `Il tuo numero è <strong>${userNumber}</strong>; il numero della CPU è <strong>${CPUNumber}</strong>. <br>
    La loro somma è <strong>${sum}</strong> ed è <strong>${oddOrEvenMessage}</strong>!`

    resultElement.innerHTML = message;
    
    
})