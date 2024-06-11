import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from '@fullcalendar/core/locales/fr';
import "../App.css";
import UsersFile from "../Assets/Users.json";

export default function Calendar({ connected }) {
    const [cours, setCours] = useState([]);

    //pour éviter le too many rerenders
    useEffect(() => {
        //dans les informations de connexion on récupère le nom de la classe
        const classeName = connected[1];

        //on trouve une correspondance dans le fichier où il y a nos classes avec find
        const classe = UsersFile.classes.find(classe => classe.name === classeName);
        //si ça fonctionne alors on met un tableau avec totues ces infos dans le state cours.
        if (classe) {
            const listecours = classe.cours.map(cours => ({
                title: cours.title,
                start: cours.start,
                end: cours.end,
                prof: cours.prof,
                lieu: cours.lieu
            }));
            setCours(listecours);
        } else {
            alert("erreur, pas de classe trouvée");
        }
    }, []);

    //quand je clique sur le cours, coursinfo étant l'objet retourné par fullcalendar
    const showinfo = (coursInfo) => {
        alert(
            `Professeur : ${coursInfo.event.extendedProps.prof},  Lieu : ${coursInfo.event.extendedProps.lieu}`
        );
    };

    return (
        <FullCalendar
            locale={frLocale}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            weekends={false}
            slotMinTime="08:00:00"
            slotMaxTime="19:00:00"
            slotDuration="01:00:00"
            height="100%"
            width="100%"
            allDaySlot={false}
            events={cours}
            eventClick={showinfo}
        />
    );
}
