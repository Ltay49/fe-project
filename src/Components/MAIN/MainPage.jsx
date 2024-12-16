import { useEffect, useState } from "react"
import axios from "axios"
import Articles from "./Articles"
export default function MainPage(){

const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
setIsLoading(true)
axios.get("https://be-nc-news-lt-1.onrender.com/api/articles")
.then((response)=>{
    const articles = response.data
    setArticles(articles)
    setIsLoading(false)
})
}, [])
if(isLoading){
return(
    <section className="main-loading">Loading...</section>
)
}
    return (
        <div className="mainp-container">
        <Articles articles={articles}/>
        </div>
    )
}