import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Docs />}/>
        <Route path="/community" element={<Community/>}/>
        <Route  path="/tutorials"element={<Tutorials/>} />
        <Route path ="*"element={<ErrorPage/>} />

      </Routes>
     
    </BrowserRouter>
  )
}

export default App
