import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Registration from "./pages/registration/Registration.jsx";
import Game from "./pages/game/Game.jsx";
import Profile from "./pages/profile/Profile.jsx";
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/game/:id" element={<Game />} />
        <Route path="/me" element={<Profile />} />

      </Routes>
    </>
  )
}

export default App;
