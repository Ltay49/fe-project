import './App.css'
import Header from './Components/HEADER/Header'
import { Route, Routes } from 'react-router-dom'
import MainPage from './Components/MAIN/MainPage'
import Article from './Components/ARTICLE/Article'
import Users from './Components/USERS/Users'
import TopicsPage from './Components/TOPICS/TopicsPage'
import { UserProvider } from "./UserContext";



function App() {
 

  return (
<>
<Header/>
<UserProvider>
<Routes>
<Route path="/" element={<MainPage />}/>
<Route path="/articles/:articleid" element={<Article />}/>
<Route path="/TopicsPage/:slug" element={<TopicsPage />}/>
<Route path="/users" element={<Users />}/>
</Routes>
</UserProvider>
</>
 
  )
}

export default App
