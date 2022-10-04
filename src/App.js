import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar'
import Homepage from "./pages/Homepage";

function app() {
  return(
    <>
    <Routes>
    <Route exact path= "/"element={<Navbar />}></Route>
    <Route exact path="Homepage" element={<Homepage />}></Route>
    </Routes>
    
    </>
  )
}
export default app;