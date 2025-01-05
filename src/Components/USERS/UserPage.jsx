import { useEffect, useState } from "react";
import axiosInstance from "../../Instance";

export default function UserPage({profile, setProfile}) {
  
  const [isUserArticleId, setUserArticleId] = useState([]);
  const [articleDetails, setArticleDetails] = useState([]);

  const signOutHandler = () => {
    setProfile(null);
  };

  useEffect(() => {
    axiosInstance("/articles")
      .then((response) => {
        const articles = response.data;
        const userArticles = articles.filter((a) => a.author === profile.username);
        
        const userId = userArticles.map((userArticle) => userArticle.article_id);
        
        setUserArticleId(userId);
      });
  }, [profile]);

  useEffect(() => {
    if (isUserArticleId.length > 0) {
      const fetchArticlesDetails = isUserArticleId.map((articleId) =>
        axiosInstance(`/articles/${articleId}`)
      );

      Promise.all(fetchArticlesDetails)
        .then((responses) => {
          const articlesData = responses.map((response) => response.data);
          setArticleDetails(articlesData);
        })
        .catch((error) => {
          console.error("Error fetching article details:", error);
        });
    }
  }, [isUserArticleId]);

    return (
      <div className="user-profile">
        <button id="sign-out-btn"onClick={signOutHandler}>sing out</button>
        <h2 id="profile-name"> Hey, {profile.name}</h2>
        <img id="profile-image" src={profile.avatar_url} alt={profile.username} />
        <div className="userArticles">
          <h2>edit your articles here</h2>
          {articleDetails.map((userArticle, id)=>(
            <ul key={id}>
              <h3>Title {userArticle.article.title}</h3>
              <p>dated:{userArticle.article.created_at}</p>
              <p>{userArticle.article.body}</p>
              <button>Edit</button>
            </ul>
          ))
          }
        </div>
      </div>
    );
  }