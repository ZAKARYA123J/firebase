import React, { useState,useEffect } from "react";
import Produit from "./compent";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sign,auth } from "./compent/singn";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
  function App() {
    const [useLog, setUsLog]=useState('')
    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        setUsLog(user)
      }) 
    })
  return (
  
     <Router>
        <Routes>
      
      <Route path="/clouting" element={<Produit/>} />
      <Route path="/" element={<Sign/>} />
    </Routes>
      </Router>
      
  
  )
}


export default App;