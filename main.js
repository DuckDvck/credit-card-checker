//* Challenge Project: Credit Card Checker


// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//* FUNCTION TAKES IN AN ARRAY OF NUMBERS, TRANSFORMS THEN CHECKS THE ARRAY WITH THE LUHN ALGORITHM, PRINTS IF THE CARD NUMBER IS VALID OR INVALID, AND PRINTS WHICH CREDIT CARD COMPANY THE CARD IS IF RECOGNIZED. 
function creditCardChecker (cardNumber) {
    let arrCheck = []; //new TRANSFORMED array we are creating
    let cardCount = cardNumber.length - 1 ;
    
    let turn = 1; //counter to manipulate every other index

    for(let i = cardCount; i >= 0; i--) {
          
        if(turn % 2 === 0) {
            evenSum = cardNumber[i] * 2; 
            if(evenSum > 9) {
                evenSum -= 9;
                arrCheck.unshift(evenSum) //adds to front of array
            } else {
                arrCheck.unshift(evenSum)
            }
            
        } else {
            arrCheck.unshift(cardNumber[i])
        }
        turn++;
    }
    
    //*THIS FUNCTION ADDS ALL THE ITEMS IN THE ARRAY.   
    let sumOf = arrCheck.reduce((previousValue, currentValue) => previousValue + currentValue, 0); 
    

      //*CHECKS IF THE DECODED CREDDIT CARD NUMBER % 10 === 0, IF NOT, THEN THE CARD IS INVALID
    if (sumOf % 10 === 0) {
        console.log('Valid Card!')
    } else {
        console.log('Invalid Card')
    }

    //* THIS CODE CHECKS THE FIRST DIGIT IN THE DECODED CARD NUMBER AND SPECIFIES WHICH CREDIT CARD COMPANY IT BELONGS TO
    let companyCheck = arrCheck[0];
    let cardCompany = 'Unknown'; 
    switch (companyCheck) {
        case 6:
        cardCompany = 'Discover';
        case 5:
        cardCompany = 'Mastercard';
        case 4:
        cardCompany = 'Visa';
        case 3:
        cardCompany = 'Amex';
        default:
        break;
    }

     console.log('Card Company: ' + cardCompany)
}



// creditCardChecker(valid1); 
// creditCardChecker(valid2);
// creditCardChecker(valid3); 
// creditCardChecker(valid4);
// creditCardChecker(valid5);

//creditCardChecker(invalid1); 
// creditCardChecker(invalid2);
// creditCardChecker(invalid3);
// creditCardChecker(invalid4);
// creditCardChecker(invalid5);

// creditCardChecker(mystery1);
// creditCardChecker(mystery2);
// creditCardChecker(mystery3);
// creditCardChecker(mystery4);
// creditCardChecker(mystery5);



