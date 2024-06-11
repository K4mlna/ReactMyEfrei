import { useState, useEffect } from "react";
import "../App.css";
import UsersFile from "../Assets/Users.json";
import Navbar from "../Components/Navbar";

export default function AbsencesPage({ connected }) {
    const [absences, setAbsences] = useState([]);

    useEffect(() => {
        const user = UsersFile.users.find(user => user.username === connected[0]);
        if (user.absences) {
            setAbsences(user.absences);
        } else {
            alert("Aucune absence");
        }
    }, []);

    return (
        <>
            <Navbar connected={connected}></Navbar>
            <div class="planningcontainer">
                <h1>Absences</h1>
                <p></p>
                <div class="calendarcontainer">
                    <div className="table2">
                            <div className="tableelement">Date d'absence</div>
                        </div>
                        <div className="tableelements">
                            {absences.map((absence) => (
                                <div className="tablehaut">
                                    <div className="tableelement">{absence}</div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
    
        </>
    );
}

