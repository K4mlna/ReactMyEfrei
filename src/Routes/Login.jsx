import { useEffect, useState } from "react";
import UsersFile from "../Assets/Users.json";
import { useNavigate } from "react-router-dom";
import "../App.css"

//ce qu'on prend en props c'est la fonction pour faire remonter les infos de login de l'utilisateur
export default function Root(props) {

  //destiné à être changé à la modification de l'input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect (() => {console.log(username)},[username])
  
  const navigate = useNavigate()

  // à chaque fois que j'appuie sur login
  const requestCredentials = (input) => {
    input.preventDefault(); 


    //récup le mdp et le login
    const user = UsersFile.users.find(
      //on cherche une correspondance, et si il y en a une alors on la stocke dans user.
      (user) => user.username === username && user.password === password
    );

    //si la correspondance est là alors on regarde si c'est un admin ou pas et on le login au bon endroit. Sinon, c'est que le mdp ou l'identifiant n'est pas reconnu.
    if (user) {

      //dans la liste de nos props on prend la fonction sendConnectionData
      props.sendConnectionData([user.username, user.classe])
      
      if (user.isAdmin === "True") {
        navigate ("Admin")
      } else {
        navigate ("User")
      }
    } 
    
    else {
      alert("Identifiant ou mot de passe non reconnu");
    }
  };

  return (
    <body class="loginBG">
      
      <section class="loginsection">
        <img class="logo" src="https://media.discordapp.net/attachments/798264990850482187/1244274557951414324/logo_AnimEfrei.png?ex=6654847c&is=665332fc&hm=e48feafb06cdf493572be41055641be366e15ce0011d05de4d9c9f8244b4dcdd&=&format=webp&quality=lossless&width=1440&height=488"></img>
        <h1 class="titlelogin">Connexion</h1>
        <h1 class="titlelogin2">Entrez vos identifiants</h1>
        <form onSubmit={requestCredentials}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(input) => setUsername(input.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(input) => setPassword(input.target.value)}
          />
          <input type="submit" value="Se connecter" />
        </form>
      </section>
      <img src="https://wallpapers.com/images/hd/anime-school-background-dh3ommnxthw4nln7.jpg" class="loginIMG"></img>
    </body>
  );
} 