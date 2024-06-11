import { useState, useEffect } from "react";
import "../App.css";
import UsersFile from "../Assets/Users.json";

export default function NotesTable({ connected }) {
    const [matieres, setMatieres] = useState([]);

    useEffect(() => {

        // Récupérer les informations de notre nom d'utilisateur dans connected
        const user = UsersFile.users.find(user => user.username === connected[0]);

        if (user) {

            // Trouver la classe dans Users.json notre fichier bdd
            const classe = UsersFile.classes.find(classe => classe.name === user.classe);

            //ternaire, si la classe est trouvée, on rajoute les notes de l'utilisateur, sinon on met rien
            if (classe) {
                const listeMatieres = classe.modules.map(matiere => ({
                    nom: matiere,
                    note: user.notes[matiere] ? user.notes[matiere] : ""
                }));
                setMatieres(listeMatieres);
            } else {
                alert("erreur pas de classe trouvée");
            }
        } else {
            alert("erreur utilisateur pas trouvé");
        }
    }, []);

    return (
        <>
            <div className="table">
                <div className="table2">
                    <div className="tablehaut">
                        <div className="tableelement">Matières</div>
                        <div className="tableelement">Note</div>
                    </div>
                </div>
                <div className="tableelements">
                    {matieres.map((matiere) => (

                        <div className="tablehaut">
                            <div className="tableelement">{matiere.nom}</div>
                            <div className="tableelement">{matiere.note}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
