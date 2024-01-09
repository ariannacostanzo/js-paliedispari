// console.log('functions ok');



function isPalindrome (word) {
    let isPalindrome = false;
    let reverseWord = ''

    for (let i = word.length - 1; i >= 0; i--) {
        console.log(word[i]);
        reverseWord += word[i];
        
    }
    
    console.log(reverseWord);
    
    if (reverseWord === word) {
        console.log('è uguale');
        isPalindrome = true;
    } 

    return isPalindrome;
}

const word = 'osso';

const result = isPalindrome(word);
console.log(result);



