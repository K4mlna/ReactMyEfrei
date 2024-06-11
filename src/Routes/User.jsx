import React from "react";
import Navbar from "../Components/Navbar";


export default function UserPage({ connected }) { 
      
  return (
    <>
      <body class="userbody">
        <Navbar profile="Étudiant" connected={connected}/>
        <h1 class="welcomeMSG">Bienvenue sur AnimEfrei, {connected[0]} !</h1>
      </body>
    </>
  );
}
