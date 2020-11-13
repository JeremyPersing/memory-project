import React, { useState } from 'react';
// Imports of all the photos, as relative path won't work
import Alabama from './photos/Alabama.jpg';
import Astros from './photos/Astros.jpg';
import Clemson from './photos/Clemson.jpg';
import Cowboys from './photos/Cowboys.jpg';
import Eagles from './photos/Eagles.jpg';
import Georgia from './photos/Georgia.jpg';
import Missouri from './photos/Missouri.jpg';
import Nebraska from './photos/Nebraska.jpg';
import NotreDame from './photos/NotreDame.jpg';
import OhioState from './photos/OhioState.jpg';
import Oregon from './photos/Oregon.jpg';
import Phillies from './photos/Phillies.jpg';
import Royals from './photos/Royals.jpg';
import SacState from './photos/SacState.jpg';
import Texas from './photos/Texas.jpg';


//Used to shuffle the cards when a player selects a card
const shuffleArray = (arr) => {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}

const App = () => {
  // States that will hold the score of the game
  const [currScore, setScore]= useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [victories, setVictories] = useState(0);
  const [clickedItems, setClickedItems] = useState([]);

  const increaseScore = () => {
    setScore(currScore + 1);
  };

  const increaseBestScore = () => {
    setBestScore(bestScore + 1);
  };

  // Used to increment the count of the score, or the best score
  const increment = (card) => {
    let cardStr = card.key;
  
    
    let sameCard = false;
    for (let i = 0; i < clickedItems.length; i++) {
      if (clickedItems[i] === cardStr) { // Checking for equality between cards that have been clicked                                    
        sameCard = true;
        break;
      }
    }

    if (sameCard) {
      wrongCard(); // Because there was an equality, the current score needs to be reset
      clickedItems.splice(0, clickedItems.length); // Because we caught the equality, we have to 
      sameCard = false;
    }
    else {
      setClickedItems([...clickedItems, card.key]) // The card had not been clicked before so push it the the array of clicked cards 
      increaseScore();  // Increment the score because the card has not been clicked before
      if (bestScore === currScore) {
        increaseBestScore();
      }
    }
    

    
    
    createBoard(); // Update the playing board
  }


  // Resets the score to zero
  const wrongCard = () => {
    setScore(0);
  }
  

  const createBoard = () => {
    let options = [
      <div key='bigAl' class='border p-1'>
        <img height='100%' width='100%' src={Alabama} alt='Big Al'></img>
        <p><strong>Name</strong>: Big Al</p>
        <p><strong>Team</strong>: Alabama</p>
      </div>,
      <div key='orbit' class='border p-1'>
        <img height='100%' width='100%' src={Astros} alt='Orbit' ></img>
        <p><strong>Name</strong>: Orbit</p>
        <p><strong>Team</strong>: Houston Astros</p>
      </div>,
      <div key='the-tiger' class='border p-1'>
        <img height='100%' width='100%' src={Clemson} alt='The Tiger' ></img>
        <p><strong>Name</strong>: The Tiger</p>
        <p><strong>Team</strong>: Clemson</p>
      </div>,
      <div key='rowdy' class='border p-1'>
        <img height='100%' width='100%' src={Cowboys} alt='Rowdy' ></img>
        <p><strong>Name</strong>: Rowdy</p>
        <p><strong>Team</strong>: Dallas Cowboys</p>
      </div>,
      <div key='swoop' class='border p-1'>
        <img height='100%' width='100%' src={Eagles} alt='Swoop'></img>
        <p><strong>Name</strong>: Swoop</p>
        <p><strong>Team</strong>: Philadelphia Eagles</p>
      </div>,
      <div key='uga' class='border p-1'>
        <img height='100%' width='100%' src={Georgia} alt='Uga' ></img>
        <p><strong>Name</strong>: Uga</p>
        <p><strong>Team</strong>: Georgia</p>
      </div>,
      <div key='truman' class='border p-1'>
        <img height='100%' width='100%' src={Missouri} alt='Truman the Tiger' ></img>
        <p><strong>Name</strong>: Truman</p>
        <p><strong>Team</strong>: Missouri</p>
      </div>,
      <div key='lil-red' class='border p-1'>
        <img height='100%' width='100%' src={Nebraska} alt='Lil Red' ></img>
        <p><strong>Name</strong>: Lil Red</p>
        <p><strong>Team</strong>: Nebraska</p>
      </div>,
      <div key='leprechaun' class='border p-1'>
        <img height='100%' width='100%' src={NotreDame} alt='Leprechaun' ></img>
        <p><strong>Name</strong>: Leprechaun</p>
        <p><strong>Team</strong>: Notre Dame</p>
      </div>,
      <div key='brutus' class='border p-1'>
        <img height='100%' width='100%' src={OhioState} alt='Brutus' ></img>
        <p><strong>Name</strong>: Brutus</p>
        <p><strong>Team</strong>: Ohio State</p>
      </div>,
      <div key='duck' class='border p-1'>
        <img height='100%' width='100%' src={Oregon} alt='The Oregon Duck' ></img>
        <p><strong>Name</strong>: The Duck</p>
        <p><strong>Team</strong>: Oregon</p>
      </div>,
      <div key='phillie-phanatic' class='border p-1'>
        <img height='100%' width='100%' src={Phillies} alt='Phillie Phanatic'></img>
        <p><strong>Name</strong>: Phillie Phanatic</p>
        <p><strong>Team</strong>: Philadelphia Phillies</p>
      </div>,
      <div key='sluggerrr' class='border p-1'>
        <img height='100%' width='100%' src={Royals} alt='Sluggerrr' ></img>
        <p><strong>Name</strong>: Sluggerrr</p>
        <p><strong>Team</strong>: Kansas City Royals</p>
      </div>,
      <div key='herky' class='border p-1'>
        <img height='100%' width='100%' src={SacState} alt='Herky the Hornet' ></img>
        <p><strong>Name</strong>: Herky</p>
        <p><strong>Team</strong>: Sacramento State</p>
      </div>,
      <div key='bevo' class='border p-1'>
        <img height='100%' width='100%' src={Texas} alt='Bevo' ></img>
        <p><strong>Name</strong>: Bevo</p>
        <p><strong>Team</strong>: Texas</p>
      </div>,
    ];

    let blank = shuffleArray(options);
    

    let container = React.createElement('div', {class: 'container text-center'},
      React.createElement('div', {class: 'row pt-3'}, [
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[0])}, blank[0]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[1])}, blank[1]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[2])}, blank[2]),
      ]),
      React.createElement('div', {class: 'row pt-3'},
      [
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[3])}, blank[3]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[4])}, blank[4]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[5])}, blank[5])
      ]),
      React.createElement('div', {class: 'row pt-3'}, [
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[6])}, blank[6]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[7])}, blank[7]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[8])}, blank[8]),
      ]),
      React.createElement('div', {class: 'row pt-3'},
      [
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[9])}, blank[9]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[10])}, blank[10]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[11])}, blank[11])
      ]),
      React.createElement('div', {class: 'row pt-3'}, 
      [
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[12])}, blank[12]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[13])}, blank[13]),
        React.createElement('div', {class: 'col-sm-4', onClick: () => increment(blank[14])}, blank[14])
      ])
    );
    
    return container;
  }

  if (currScore === 15) {
    wrongCard();
    setVictories(victories + 1);
  }

  return (
    <div>
      <div class="text-center">
        <h1>Mascot Mania</h1>
        <p>Don't Click on the Same Card Twice ... Or Else ...</p>
        <div class="container">
          <div class='row'>
            <div class='col-sm-4'><h4>Current Score: {currScore}</h4></div>
            <div class='col-sm-4'><h4>Best Score: {bestScore}</h4></div>
            <div class='col-sm-4'><h4>Victories: {victories}</h4></div>
          </div>
        </div>
      </div>
      {createBoard()}
    </div>
  )
}

export default App;
