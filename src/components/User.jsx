// Arquivo responsável por renderizar os dados do usuário e permitir a edição dos mesmos.
// O componente User recebe os dados do usuário (name, email e phone) e renderiza esses dados.
// O componente User possui um estado editing que controla se os dados estão sendo editados ou não.
// O componente User possui um estado newName que armazena o novo nome do usuário.
// O componente User possui um estado newEmail que armazena o novo email do usuário.
// O componente User possui um estado newPhone que armazena o novo telefone do usuário.
// O componente User possui a função handleSave que alterna o estado editing entre true e false.
// O componente User renderiza o nome do usuário em um input caso o estado editing seja true, caso contrário, renderiza o nome do usuário em um span.

import { useState } from 'react';

export default function User({ name="default name", email="default mail", phone="Phone not setted" }) {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
// phone number
  const [newPhone, setNewPhone] = useState(phone);
  

  function handleSave() {
    setEditing((editing) => !editing);
  }

  let userName = editing ? (
    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
  ) : (
    <span className="user-name">{newName}</span>
  );

  let userEmail = editing ? (
    <input type="text" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
  ) : (
    <span className="user-email">{newEmail}</span>
  );

    // phone number
    let userPhone = editing ? ( 
    <input type="text" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
  ) : ( 
    <span className="user-phone">{newPhone}</span>
  );

 


  let saveButton = editing ? (
    <button onClick={handleSave}>Save</button>
  ) : (
    <button onClick={handleSave}>Edit</button>
  );

  return (
    <li>
      <span className="user">
        <span className="user-name"> {userName} </span>
        <span className="user-email"> {userEmail} </span>
        <span className="user-phone"> {userPhone} </span  >
      </span>

      {saveButton}
    </li>
  );
}


