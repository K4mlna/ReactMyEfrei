import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Users from "../Assets/Users.json";
import Navbar from "../Components/Navbar";
import Calendar from "../Components/Calendar"

export default function PlanningPage({connected}) {
  return (
    <> 
    <Navbar connected={connected}></Navbar>
    <div class="planningcontainer">
      <h1>Planning</h1>
      <div class="calendarcontainer">
        <Calendar connected={connected}></Calendar>
      </div>
    </div>
    </>
  );
}