// alert('set the table width and height before starting the game');

const desk = document.getElementById('cardDesk');
const createButton = document.getElementById('create');
const inp = document.getElementsByClassName('inp');
const error = document.getElementsByClassName('errorMessage');

const imagesData = ['1.png', '2.png', '3.png', '4.png', 
                    '5.png', '6.png', '7.png', '8.png', 
                    '9.png','10.png', '11.png', '12.png' ];

const newArray = [ ...imagesData, ...imagesData ];

createButton.addEventListener('click', function () {
    desk.innerText = '';

    let count = inp[0].value * inp[1].value;
    if (count < 4) {
        error[0].innerText = 'thе count of cards should be equal or greather than 4';
        return;
    }  
    if (count > 24 ) {
        error[0].innerText = 'thе count of cards should be less or equal to 24';
        return;
    }
    if (count % 2) {
        error[0].innerText = 'the count of cards should be even';
        return;
    }

    desk.style.width = `${130 * inp[0].value}px`;

    for (let i = 0; i < count; i++) {
        let div = document.createElement('div');
        div.addEventListener("click", displayCard);

        div.classList.add('card');
        div.data = 'images/6.svg';

        let image = document.createElement('img');
        image.classList.add('image');
        image.src = 'images/6.svg';

        div.append(image);
        desk.append(div);
    }
})

function displayCard() {
    this.classList.toggle("open");
    this.classList.toggle("show");
    // this.classList.toggle("disabled");
}


function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
  console.log(currentIndex);
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

// 5
//   [5,2,3,7,1,4];    3  0

//   const deck = document.querySelector(".deck");
//   function startGame(){
//      var shuffledCards = shuffle(cards);
//      for (var i= 0; i < shuffledCards.length; i++){
//         [].forEach.call(shuffledCards, function(item){
//            deck.appendChild(item);
//         });
//      }
//   }




  //   window.onload = startGame();

//   //add opened cards to OpenedCards list and check if cards are match or not
// function cardOpen() {
//     openedCards.push(this);
//     var len = openedCards.length;
//     if(len === 2){
//         moveCounter();
//         if(openedCards[0].type === openedCards[1].type){
//             matched();
//         } else {
//             unmatched();
//         }
//     }
// };

// //for when cards match
// function matched(){
//     openedCards[0].classList.add("match");
//     openedCards[1].classList.add("match");
//     openedCards[0].classList.remove("show", "open");
//     openedCards[1].classList.remove("show", "open");
//     openedCards = [];
// }

// //for when cards don't match
// function unmatched(){
//     openedCards[0].classList.add("unmatched");
//     openedCards[1].classList.add("unmatched");
//     disable();
//     setTimeout(function(){
//         openedCards[0].classList.remove("show", "open", "unmatched");
//         openedCards[1].classList.remove("show", "open", "unmatched");
//         enable();
//         openedCards = [];
//     },1100);
// }

// //disable cards temporarily
// function disable(){
//     Array.prototype.filter.call(cards, function(card){
//         card.classList.add('disabled');
//     });
// }

// //enable cards and disable matched cards
// function enable(){
//     Array.prototype.filter.call(cards, function(card){
//         card.classList.remove('disabled');
//         for(var i = 0; i < matchedCard.length; i++){
//             matchedCard[i].classList.add("disabled");
//         }
//     });
// }
