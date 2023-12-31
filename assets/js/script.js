
document.addEventListener("DOMContentLoaded",function(){

let buttons = document.getElementsByTagName('button');

for(let button of buttons){

button.addEventListener("click", function() {

 if(this.getAttribute('data-type')=== "submit"){


   // alert("You clicked submit");
   checkAnswer();


 }else{
        let gameType = this.getAttribute('data-type');
       // alert(`you clicked ${gameType}`);
       runGame(gameType);
 }
                                                
                                       

})

}


runGame('addition');

})

/**
 The main game "loop" , called when the script:  is first loaded
and after the user  answers have been processed
*/


function runGame(gameType){

   // create two random numbers between 1 nad 25

   let num1 = Math.floor(Math.random() * 25) + 1;

   let num2 = Math.floor(Math.random() * 25) + 1;

  if(gameType === 'addition'){

   displayAdditionQuestion(num1,num2);

  }
    else{

      alert(` unknown game type:  ${gameType}`);
      throw `unknown game type: ${gameType}.Aborting`;
    }


}


/**
 * check  the answer against the first element in
 *  the returned calculatedCorrectAnswer  Array
 */

function checkAnswer(){

let userAnswer = parseInt(document.getElementById('answer-box').value);


let calculatedAnswer = calculateCorrectAnswer();

let isCorrect = userAnswer === calculatedAnswer[0];

if(isCorrect){

    alert('hey you got it right :D');
}
else{

   alert(` Awww... you answered ${userAnswer} . The correct answer is was  ${calculatedCorrectAnswer[0]} !`);
}


runGame(calculateCorrectAnswer[1]);

}


/**
 * Get the operand (the number) and the operator (plus, minus ect)
 * directly from the dom, and returns the correct answer
 */

function  calculateCorrectAnswer(){

let operand1 = parseInt(document.getElementById('operand1').innerText );

   let operand2 = parseInt(document.getElementById('operand2').innerText);

   let operator = document.getElementById('operator').innerText;

   if(operator === "+"){

    return [operand1 + operand2, "addition"];

   }
     else{

          alert(`Unimplemented operator  ${operator}`);
          throw `Unimplemented operator ${operator} .Aborting!`;
     }


}

function incrementScore(){


}

function incrementWrongAnswer(){


}

function displayAdditionQuestion(operand1,operand2){

document.getElementById('operand1').textContent = operand1;

   document.getElementById('operand2').textContent = operand2;
  
   document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion() {



}

function displayMultiplyQuestion() {



}


/* create display divide function  */