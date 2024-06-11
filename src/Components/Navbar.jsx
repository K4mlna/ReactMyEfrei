import { useState } from "react";
import Root from "../Routes/Login";
import { Link } from "react-router-dom";
import "../App.css"


export default function Navbar({connected}) {
    return (
        <>
            <div class="headertop">
            <img class="logonav" src="https://media.discordapp.net/attachments/798264990850482187/1244274557951414324/logo_AnimEfrei.png?ex=66684afc&is=6666f97c&hm=d07d47ebae8baf09b453cf22f2275e06170d5a0e76c882ba91ec9d9f3f1423b0&=&format=webp&quality=lossless&width=1091&height=370"></img>
            <div class="profiletype">
                Classe : {connected[1]}
            </div>
            <div class="profiletype2">
                Connecté en tant que : {connected[0]}
            </div>
            <Link class="linkcontainer" to="/">
            <img class="imgexit" src="https://media.discordapp.net/attachments/798264990850482187/1244304003735617606/door-exit-svgrepo-com_1.png?ex=66686668&is=666714e8&hm=8fd0ee585220a20da1e37c465f72084fdaf050cf0bd50099140a89079250f990&=&format=webp&quality=lossless"></img>
            </Link>
           
            </div>
            <nav className="navbar">
                <ul className="navbarlist">
                    <Link class="navlink" to="/User" connected={connected}>Accueil</Link>
                    <Link class="navlink" to="/Planning" connected={connected}>Planning</Link>
                    <Link class="navlink" to="/Notes" connected={connected}>Notes</Link>
                    <Link class="navlink" to="/Absences" connected={connected}>Absences</Link>
                </ul>
            </nav>
        </>
    )
}