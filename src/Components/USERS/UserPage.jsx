import { useEffect, useState } from "react";
import { useUser } from "../../UserContext";
import axiosInstance from "../../Instance";

export default function UserPage({profile, setProfile}) {
  
  const [userArticles, setUserArticles] = useState([])

    const signOutHandler=()=>{
      setProfile(null)
   }

   useEffect(()=>{
    axiosInstance("/articles")
    .then((response)=>{
      const articles = response.data
      const userArticles = articles.filter((a) =>{
      if(a.author=== profile.username){
        return a
      }
      })
      setUserArticles(userArticles)
    })
  },[])


    return (
      <div className="user-profile">
        <button id="sign-out-btn"onClick={signOutHandler}>sing out</button>
        <h2 id="user-name">{profile.name}</h2>
        <img id="user-image" src={profile.avatar_url} alt={profile.username} />
        <div className="userArticles">
          <h2>edit your articles here</h2>
          {userArticles.map((userArticle, id)=>(
            <ul key={id}>
              <li>{userArticle.title}</li>
              <img src={userArticle.article_img_url}></img>
              <button>edit</button>
            </ul>
          ))
          }
        </div>
      </div>
    );
  }