import React, { useState, useEffect } from 'react';
import UsersFile from '../Assets/Users.json';

export default function AdminPage () {
  
  //userfile
  const [users, setUsers] = useState([]);
  //données en input
  const [newUser, setNewUser] = useState({ username: '', password: '', email: '', isAdmin: 'False', classe: '' });
  //là ou sont stockées les infos de l'user qu'on modifie
  const [selectedUser, setSelectedUser] = useState(null);
  //est-ce qu'on affiche le pannel de modification ?
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setUsers(UsersFile.users);
  }, []);

  //prendre en considération les changements dans le state de l'utilisateur dans formulaire de création
  const changeNewUser = (interracted) => {
    setNewUser({ ...newUser, [interracted.target.name]: interracted.target.value });
  };
  //même chose pour le form de modification, on stocke ses infos pour les remettre dans l'onglet de modification
  const changeSelectedUser = (interracted) => {
    setSelectedUser({ ...selectedUser, [interracted.target.name]: interracted.target.value });
  };

  //rajouter le nouveau user à la liste des utilisateurs
  const userNew = () => {
    setUsers([...users, newUser]);
  };

  //on prend le username en paramètre
  const updateUser = (username) => {
    const updatedUsers = users.map(user => {
      if (user.username === username) {
        return selectedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    //vider le tableau
    setSelectedUser(null);

    //stopper l'édition
    setIsEditing(false);
  };

  const deleteUser = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  const startEditing = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  //le deuxième && sert à render si la condition est validée
  return (
    <div>
      <h1>Connecté en tant qu'administrateur</h1>

      <section>
        <h2>Gestion des utilisateurs</h2>
        <div>
          <input name="username" value={newUser.username} onChange={changeNewUser} placeholder="Username" />
          <input name="password" type="password" value={newUser.password} onChange={changeNewUser} placeholder="Password" />
          <input name="email" value={newUser.email} onChange={changeNewUser} placeholder="Email" />
          <input name="classe" value={newUser.classe} onChange={changeNewUser} placeholder="Class" />
          <select name="isAdmin" value={newUser.isAdmin} onChange={changeNewUser}>
            <option value="True">Admin</option>
            <option value="False">User</option>
          </select>
          <button onClick={userNew}>Ajouter l'utilisateur</button>
        </div>

        {users.map(user => (
          <div>
            <p>{user.username} - {user.email} - {user.classe} - isAdmin : {user.isAdmin}</p>
            <button onClick={() => startEditing(user)}>Modifier</button>
            <button onClick={() => deleteUser(user.username)}>Supprimer</button>
          </div>
        ))}

        {isEditing && selectedUser && (
          <div>
            <h2>Modifier l'utilisateur</h2>
            <input name="username" value={selectedUser.username} onChange={changeSelectedUser} placeholder="Username" />
            <input name="password" type="password" value={selectedUser.password} onChange={changeSelectedUser} placeholder="Password" />
            <input name="email" value={selectedUser.email} onChange={changeSelectedUser} placeholder="Email" />
            <input name="classe" value={selectedUser.classe} onChange={changeSelectedUser} placeholder="Class" />
            <select name="isAdmin" value={selectedUser.isAdmin} onChange={changeSelectedUser}>
              <option value="True">Admin</option>
              <option value="False">User</option>
            </select>
            <button onClick={() => updateUser(selectedUser.username)}>Mettre à jour</button>
            <button onClick={() => { setIsEditing(false); setSelectedUser(null); }}>Annuler</button>
          </div>
        )}
      </section>
    </div>
  );
};