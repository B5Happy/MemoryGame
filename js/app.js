/*
 * Create a list that holds all cards
 */

cardsListe = ["fa-anchor","fa-anchor","fa-diamond","fa-diamond","fa-paper-plane-o","fa-paper-plane-o",
            "fa-bolt","fa-bolt","fa-cube","fa-cube","fa-leaf","fa-leaf","fa-bicycle","fa-bicycle","fa-bomb","fa-bomb"];


/*
* Creation of event listener to trigger a click function when clicked
*/

document.getElementById("box").addEventListener("click", click);
let sec = 0;

/*
 * Display the cards on the page and setting the timer
 */

function myFunction() {

    newCards = shuffle(cardsListe);
    const displayAllCard = document.getElementById("box");
    const newCard = document.createElement('i');

    cardsListe.forEach(function(card) {

        const cardHolder = document.createElement('li');
        cardHolder.classList.add('card');
        const newCard = document.createElement('i');
        newCard.classList.add('fa',card);
        cardHolder.appendChild(newCard);
        displayAllCard.appendChild(cardHolder);
  
    });


    clock = setInterval("watchStart()", 1000);

    
} 

/*
*Creation of a timer
*/
function watchStart() {
	sec++;
	document.getElementById("timer").innerHTML = sec;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

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
let moveCount = 0;
let cardCliked = false ; 
let numStar = "3 Stars"

/*
*
*/


function click() {

    cardCliks(event);

   if ( cardCliked === true){

    show(event);
    addToList(event);
    
    if (list.length === 2){

        if (list[0].innerHTML === list[1].innerHTML){

            match();

            if ( matchList === 8 ){

                setTimeout(win, 1500);
                //alert("You win ! with "+ document.getElementsByTagName("span")[0].innerHTML + " moves" )
            
            }

        } else {

            dMatch();
            setTimeout(dontMatch, 1000);
        }
        
    }

    increase(event);
    star();

    
    }

}

/*
* Verify if the card is clicked only once
*/

function cardCliks(event){

    console.log(event.target.classList);

    const contentClicked = event.target.classList.contains("deck"); 
    const contentClicked2 = event.target.classList.contains("open"); 

    if ( contentClicked === true || contentClicked2 === true){

        cardCliked = false;
      
    } else {

        cardCliked = true;
    }
}

/*
* Display the card clicked
*/
function show(event) {

    event.target.classList.add('open','show');
   
}

function finish (){

}

function addToList(event){

    ev = event.target;
    list.push(ev);

    
}

/*
* Verify if the cards match
*/
function match(){

    list[0].classList.remove("open", "show");
    list[1].classList.remove("open", "show");
    list[0].classList.add('match');
    list[1].classList.add('match');
    list =[];
    matchList++;

}
/*
* Event when the card dosent match
*/
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
/*
* Set up of a move counter
*/
function increase(event){
   
    ev = event.target;
    moveCount++;
    document.getElementsByTagName("span")[0].innerHTML = moveCount;
    
  
} 
/*
* Reset the game
*/
function reset() {
    location.reload();
  }
/*
* Ratings for the game based on number of moves used to complete the game
*/
  function star() {

    
   const star = document.getElementById("star1");
   const star2 = document.getElementById("star2");
   const star3 = document.getElementById("star3");
 

    /*if (  document.getElementsByTagName("span")[0].innerHTML > 28 ) {


        star3.remove();
    
    }  else { */

    if ( document.getElementsByTagName("span")[0].innerHTML > 24 )  {

        numStar = "2 Stars"
        star2.remove();
    
    }  else {

    if ( document.getElementsByTagName("span")[0].innerHTML > 20 )  {


        numStar = "1 Star"
        star.remove();
    
            }  
        }
    //}

}
/*
* Results (Details of the win) 
*/
function win () {
    
    //alert("You win ! with "+ document.getElementsByTagName("span")[0].innerHTML + " moves" )
    clearInterval(clock);
    //document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
    document.body.innerHTML = "";
    winingAnonce = document.createElement("div");
    winingTitle = document.createElement("h2");
    wininingText = document.createTextNode("Congratulations! You Won!");
    winingTitle.appendChild(wininingText);
    results = document.createElement("p");
    resultsText = document.createTextNode(` In ${sec} seconds with ${moveCount} Moves and ${numStar}.`);
    results.appendChild(resultsText);
    button = document.createElement("button");
    buttonText = document.createTextNode("Play again!");
    button.appendChild(buttonText);
    button.addEventListener("click", reset);
    button.classList.add("btn");
    button.classList.add("btn-outline-primary");
    winingAnonce.classList.add("container");
    winingAnonce.appendChild(winingTitle);    
    winingAnonce.appendChild(results);
    winingAnonce.appendChild(button);                                 
    document.body.appendChild(winingAnonce);        

}
