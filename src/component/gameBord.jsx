



export default function Gamebord({onSelectSquare,board})
{
    
// {
//     const [gameboard,setgameboard]=useState(initialgamebord);
//     function handleonselect(index,colIndex)
//     {
//         setgameboard((prevBoard)=>{
//             const updateprevBoard=[...prevBoard.map(innerArray=>[...innerArray])];
//                 updateprevBoard[index][colIndex]=activePlayerSymbol;
//                 return updateprevBoard;
//         });
//         onSelectSquare();
//     }
return(
    <ol id="game-board">
        {board.map((rows,index)=>(
            <li key={index}>
                <ol>
                    {rows.map((playerSymbol,colIndex)=>(<li key={colIndex}>
                        <button onClick={()=>onSelectSquare(index,colIndex)}disabled={playerSymbol != null}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>
        ))}
    </ol>
)

}