import './App.css';
import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Routes/Login';
import Users from './Assets/Users.json';
import AdminPage from './Routes/Admin';
import UserPage from './Routes/User';
import PlanningPage from './Routes/Planning';
import NotesPage from './Routes/Notes';
import AbsencesPage from './Routes/Absences';

function App() {
  //sert à contenir l'objet de l'utilisateur connecté
  const [connected, setConnected] = useState([]);

  //fonction qu'on passe en argument pour faire remonter les infos de l'utilisateur connecté jusqu'ici
  const connectionData = (userToConnect) => {
    setConnected(userToConnect)
  }

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root sendConnectionData={connectionData} />,
    },
    {
      path: "/Admin",
      element: <AdminPage/>,
    },
    {
      path: "/User",
      element: <UserPage connected={connected}/>,
    },
    {
      path: "/Planning",
      element: <PlanningPage connected={connected}/>,
    },
    {
      path: "/Notes",
      element: <NotesPage connected={connected}/>,
    },
    {
      path: "/Absences",
      element: <AbsencesPage connected={connected}/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
