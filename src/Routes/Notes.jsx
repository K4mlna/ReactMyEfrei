import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import NotesTable from "../Components/NotesTable";


export default function NotesPage({connected}) {
  return (
    <> 
    <Navbar connected={connected}></Navbar>
    <div class="planningcontainer">
      <h1>Notes</h1>
      <div class="calendarcontainer">
        <NotesTable connected={connected}></NotesTable>
      </div>
    </div>
    </>
  );
}