
import './App.css';
import Player from './component/player.jsx';
import Boardgame from './component/gameBord.jsx';
import { useState } from 'react';
import Log from "./component/log.jsx";

function App() {
  const [gameTurns,setGameTurns]=useState([]);
  
  const [activeplayer , setactiveplayer]=useState('x')

  function handelOnSelect(rowIndex , colIndex){
    setactiveplayer((curActivePlayer)=>curActivePlayer==='x'?'o':'x');
    setGameTurns((prevTurns)=>{
      let curentPlayer = 'x';
      if(prevTurns.length>0 && prevTurns[0].player === 'x'){
        curentPlayer = 'o';
      }
      const updateTurns = [
        {square : {row:rowIndex, col : colIndex},
        player : curentPlayer},
      ...prevTurns,]
      return updateTurns;
    })
  }
  return (
    <main>
      <div id="game-container" >
        <ol id='players' className='highlight-player'>
          <Player name='player 1 ' symbol='x' isActive={activeplayer==='x'} />
          <Player name='player 2'  symbol='o' isActive={activeplayer==='o'} />
        </ol>
        <Boardgame onSelectSquare={handelOnSelect}
         turns = {gameTurns}/>


      </div>
      <Log turns={gameTurns}/>
    
    
    <h1> comming soon....</h1>
    </main>
  );
}

export default App;
