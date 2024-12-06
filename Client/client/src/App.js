import React from 'react'
import Home from './Compoent/Home'
import Fav from './Compoent/Fav'
import {createBrowserRouter, RouterProvider, Navigate, useNavigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={ <Home />}>  </Route>

        <Route path="/" >
           <Route path="Fav" element={<Fav />} />
        </Route>
      </Routes>
    </>
  )
}

export default App