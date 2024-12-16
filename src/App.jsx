import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/HEADER/Header'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Components/MAIN/MainPage'



function App() {
 

  return (
<>
<Header/>
<Routes>
<Route path="/" element={<MainPage />}/>
</Routes>
</>
 
  )
}

export default App
