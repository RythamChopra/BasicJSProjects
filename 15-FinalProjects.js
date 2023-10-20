alert("You can also play rock , paper and scissors using the keyboard keys such as 'r' , 'p' and 's'  , enjoy !"); 

function reset(){
    score.wins = 0 ,
    score.loss = 0 ,
    score.ties = 0 
    document.querySelector('.js-score')
.innerHTML = `Wins : ${score.wins} , Loss : ${score.loss} , Ties : ${score.ties}`;
}

const score = {
wins : 0 , 
loss : 0 ,
ties : 0
};


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
} else if(event.key === 'p') {
    playGame('paper') ; 
}
else if (event.key === 's') {
    playGame('scissors') ; 
}
});  

function playGame(playerMove){
pickComputerMove();
result = '';
if(playerMove === 'scissors') {
console.log(playerMove) ; 
    if(computerMove === 'scissors') {
result = 'you both tied' ;
}
else if(computerMove === 'rock') {
result = 'you Lost';
}

else if ( computerMove === 'paper') {
result = 'you won' ; 
}
}

else if (playerMove === 'paper'){
        if(computerMove === 'paper') {
result = 'you both tied' ;
}
else if(computerMove === 'scissors') {
    result = 'you Lost';
}

else if ( computerMove === 'rock') {
    result = 'you won' ; 
}
}

else if( playerMove === 'rock') {
    if(computerMove === 'rock') {
result = 'you both tied' ;
}
else if(computerMove === 'paper') {
    result = 'you Lost';
 }

else if ( computerMove === 'scissors') {
    result = 'you won' ; 

}
}  

if (result === 'you won') {
    score.wins +=  1 ;
}
else if(result === 'you Lost'){
    score.loss += 1 ;
}
else if(result === 'you both tied'){
    score.ties += 1 ; 
}

document.querySelector('.choices')
.innerHTML = `Your Pick : <img class="design-block" src = "${playerMove}-emoji.png">, Computer Pick : <img class="design-block" src = "${computerMove}-emoji.png"> = ${result}.`;

    console.log(playerMove);
document.querySelector('.js-score')
.innerHTML = `Wins : ${score.wins} , Loss : ${score.loss} , Ties : ${score.ties}`;


}
 let computerMove = '' ;
    function pickComputerMove(){
        const randomNumber = Math.random() ; 
        

if(randomNumber >= 0 && randomNumber < 1/3 ){
computerMove = 'rock' ;
}
else if(randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper' ; 
}
else if(randomNumber >= 2/3 && randomNumber < 1 ) {
computerMove = 'scissors';
}
}

const todoList = [{
    name: 'make dinner' , 
    dueDate: '2022-12-22'
} , {
    name: 'wash dishes', 
    dueDate: '2022-12-22'
}];

renderToDoList();

function renderToDoList() {

    //This is called generating the html. 
    let todoListHTML = '' ;
for (let i = 0 ; i < todoList.length ; i++) {
    const todoObject = todoList[i] ;
    //const name = todoObject.name ;
    //const dueDate = todoObject.dueDate ; 
    const { name , dueDate} = todoObject  ;

    
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML = todoListHTML + html ; 
}

console.log(todoListHTML); 

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML ; 

document.querySelectorAll('.js-delete-todo-button')
.forEach((deleteButton , index) => {
    deleteButton.addEventListener('click' , () => {
        todoList.splice(index ,1 );
    renderToDoList();
    });
}) ; 
}


document.querySelector('.js-add-todo-button')
.addEventListener('click' , () => {
    addTodo() ;
});

function addTodo() {
    const inputElement  = document.querySelector('.js-name-input') ; 
    
    
    const name = inputElement.value ; 

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value; 

    todoList.push({
        name: name , 
        dueDate: dueDate
    });  
    //This will add the elements to array . 

    inputElement.value = '' ;

    renderToDoList();
}


String() ; //This converts a number into a string. 
console.log('25' - 5) ; //This will show the number as long it subtracts , multiplies or divides except addition.(Type Coercion).
console.log('25' + 5); 


console.log(window.document);
//       window.console.log('window');    Gives 'Window' as Output



    function handleCostKeyDown(event){   //AS the 'event' did not exist inside this function , so we had to put event inside here.
      //  console.log(event.key); 
//This 'event' is an object provided to us by JS and contains info about the event. 
//This is showing us the Keyboard event on the console.

if (event.key === 'Enter') {   
    calculateTotal() ;
}
    }


function calculateTotal(){
 const inputElement = document.querySelector('.js-cost-input');
 let cost = Number(inputElement.value);
//    console.log(typeof cost) ; 


if(cost < 40) {
    cost = cost + 10 ;
}

document.querySelector('.js-total-cost')
.innerHTML = `Please Pay : $${cost}` ; 
}




