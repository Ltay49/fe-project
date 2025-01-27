import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import ArticleVote from "./ArticleVote";

export default function Article() {
  const { articleid } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://be-nc-news-lt-1.onrender.com/api/articles/${articleid}`)
      .then((response) => {
        const article = response.data.article;
        setArticle(article);
        setIsLoading(false);
      })
  }, [articleid]); 

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="article-page">
    <div className="article_byid-box">
      <h1 id="solo_title">{article.title}</h1>
      <p id="solo_body">{article.body}</p>
      <img id="solo_img"src={article.article_img_url}></img>
      <ArticleVote articleVotes={article.votes}/>
    </div>
    <Comments/>
    </div>
  
 
  );
}