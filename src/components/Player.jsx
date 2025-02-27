import { useState } from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(name);


    function handleSave() {
        setIsEditing((editing) => !editing);
    }

    let playerName = isEditing ? (
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} required/>
    ) : (
        <span className="player-name">{newName}</span>
    );

    let saveButton = isEditing ? (
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
