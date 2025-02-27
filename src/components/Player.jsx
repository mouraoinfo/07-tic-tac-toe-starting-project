import { useState } from "react";

export default function Player({name, symbol}) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);


    function handleSave() {
        setEditing((editing) => !editing);
    }

    let playerName = editing ? (
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} required/>
    ) : (
        <span className="player-name">{newName}</span>
    );

    let saveButton = editing ? (
        <button onClick={handleSave}>Save</button>
    ) : (
        <button onClick={handleSave}>Edit</button>
    );

    return (
        <li>
        <span className="player">
            <span className="player-name"> {playerName}</span> 
            <span className="player-symbol">{symbol}</span> 
            
        </span>
       
        {saveButton}
  
        </li>
    );
    }
