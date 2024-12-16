import './App.css'
import Header from './Components/HEADER/Header'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Components/MAIN/MainPage'
import Article from './Components/MAIN/Article'



function App() {
 

  return (
<>
<Header/>
<Routes>
<Route path="/" element={<MainPage />}/>
<Route path="/articles/:articleid" element={<Article />}/>
</Routes>
</>
 
  )
}

export default App
