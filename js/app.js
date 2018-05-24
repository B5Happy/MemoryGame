/*
 * Create a list that holds all cards
 */

tscards = ["fa-anchor","fa-anchor","fa-diamond","fa-diamond","fa-paper-plane-o","fa-paper-plane-o",
            "fa-bolt","fa-bolt","fa-cube","fa-cube","fa-leaf","fa-leaf","fa-bicycle","fa-bicycle","fa-bomb","fa-bomb"];


/*
 * Display the cards on the page
 */

document.getElementById("box").addEventListener("click", click);

function myFunction() {

    newCards = shuffle(tscards);
    const ul = document.getElementById("box");
    const newI = document.createElement('i');

    tscards.forEach(function(card) {

        const newLi = document.createElement('li');
        newLi.classList.add('card');
        const newI = document.createElement('i');
        newI.classList.add('fa',card);
        newLi.appendChild(newI);
        ul.appendChild(newLi);
  
    });


    
} 

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card.
 */


list =[];
let matchList = 0;
let a = 0;
 


function click() {

    show(event);
    addToList(event);
    
    if (list.length === 2){

        if (list[0].innerHTML === list[1].innerHTML){

            match();

        } else {

            dMatch();
            setTimeout(dontMatch, 2500);
        }
        
    }

    increase();
    star();

    if ( matchList === 8 ){

        alert("You win ! with "+ document.getElementsByTagName("span")[0].innerHTML + " moves" )

    }
}


function show(event) {

    event.target.classList.add('open','show');
   
}

function addToList(event){

    ev = event.target;
    list.push(ev);

    
}

function match(){

    list[0].classList.remove("open", "show");
    list[1].classList.remove("open", "show");
    list[0].classList.add('match');
    list[1].classList.add('match');
    list =[];
    matchList++;

}

function dMatch() {

    list[0].classList.remove("open");
    list[1].classList.remove("open"); 
    list[0].classList.add('dmatch');
    list[1].classList.add('dmatch');
    
}
 
function  dontMatch() {

    list[0].classList.remove("dmatch", "show");
    list[1].classList.remove("dmatch", "show");
    list =[];


}

function increase(){
   
    a++;
    document.getElementsByTagName("span")[0].innerHTML = a;
    
  
} 

function reset() {
    location.reload();
  }

  function star() {

    
   const star = document.getElementById("star1");
   const star2 = document.getElementById("star2");
   const star3 = document.getElementById("star3");
 

    if (  document.getElementsByTagName("span")[0].innerHTML > 28 ) {


        star3.remove();
    
    }  else {

    if ( document.getElementsByTagName("span")[0].innerHTML > 24 )  {

        star2.remove();
    
    }  else {

    if ( document.getElementsByTagName("span")[0].innerHTML > 20 )  {

        star.remove();
    
            }  
        }
    }


}