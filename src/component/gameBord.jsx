


const initialgamebord =[
    [null,null,null],
     [null,null,null],
      [null,null,null]
];
export default function Gamebord({onSelectSquare,turns})
{
    let gameboard   = initialgamebord;
    for(const turn of turns)
    {
        const{square, player}=turn;
        const {row,col} =square;
        gameboard[row][col]=player;
    }
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
        {gameboard.map((rows,index)=>(
            <li key={index}>
                <ol>
                    {rows.map((playerSymbol,colIndex)=>(<li key={colIndex}>
                        <button onClick={()=>onSelectSquare(index,colIndex)}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>
        ))}
    </ol>
)

}