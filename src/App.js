
import './App.css';
import Player from './component/player.jsx';
import Boardgame from './component/gameBord.jsx';
import { useState } from 'react';
import Log from "./component/log.jsx";
import { WINNING_COMBINATIONS } from './winnigcombination.js';

const initialgamebord =[
    [null,null,null],
     [null,null,null],
      [null,null,null]
];

function driveActivePlayer(gameTurns)
{
  let curentPlayer = 'x';
      if(gameTurns.length>0 && gameTurns[0].player === 'x'){
        curentPlayer = 'o';
      }
      return curentPlayer;
}
 
function App() {
  const [gameTurns,setGameTurns]=useState([]);
  const activePlayer = driveActivePlayer(gameTurns);

  let gameboard   = initialgamebord;
    for(const turn of gameTurns)
    {
        const{square, player}=turn;
        const {row,col} =square;
        gameboard[row][col]=player;

    }
    let winner ;

    for(const combination of WINNING_COMBINATIONS)
        {
          const firstcombination = gameboard[combination[0].row][combination[0].column];
          const secondcombination = gameboard[combination[1].row][combination[1].column];
          const thirdcombination = gameboard[combination[2].row][combination[2].column];
          if(firstcombination && 
            firstcombination === secondcombination && 
            firstcombination===thirdcombination)
            {
              winner = firstcombination;
            }
        }

  // const [activeplayer , setactiveplayer]=useState('x')

  function handelOnSelect(rowIndex , colIndex){

    //setactiveplayer((curActivePlayer)=>curActivePlayer==='x'?'o':'x');
    setGameTurns((prevTurns)=>{
      const currentPlayer = driveActivePlayer(prevTurns);
      // let curentPlayer = 'x';
      // if(prevTurns.length>0 && prevTurns[0].player === 'x'){
      //   curentPlayer = 'o';
      // }
      const updateTurns = [
        {square : {row:rowIndex, col : colIndex},
        player : currentPlayer},
      ...prevTurns,]
      return updateTurns;
    })
  }
  return (
    <main>
      <div id="game-container" >
        <ol id='players' className='highlight-player'>
          <Player name='player 1 ' symbol='x' isActive={activePlayer==='x'} />
          <Player name='player 2'  symbol='o' isActive={activePlayer==='o'} />
        </ol>
        {winner && <p>you won,{winner} </p>}
        <Boardgame onSelectSquare={handelOnSelect}
         board = {gameboard}/>


      </div>
      <Log turns={gameTurns}/>
    
    
    <h1> comming soon....</h1>
    </main>
  );
}

export default App;
