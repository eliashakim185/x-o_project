import { useState } from "react";
export default function Player({name, symbol,isActive}){
    const [nameplayer,setnameplayer]=useState(name)
    const [isEditing,setIsEditing]= useState(false) 
    function handelChange(event)
    {
        setnameplayer(event.target.value);
    }
    function HandleEditClicck()
    {
        setIsEditing((editing)=>!editing);

    }
    let playerName=<span className='player-name'>{nameplayer}</span>
    if(isEditing)
    {
        playerName = <input type="text" required value={nameplayer} onChange={handelChange}/>
    }
    return(
        <li className={isActive? 'active': undefined}>
            <span className='player'>
           {playerName}
            <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={HandleEditClicck}>{isEditing? 'save' : 'edit'}</button>
          </li>



    );
}