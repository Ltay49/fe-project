import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function TopicPage() {
  const { slug } = useParams(); 
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    axios.get(`https://be-nc-news-lt-1.onrender.com/api/articles?search=topic&topic=${slug}`)
      .then((response) => {
        const articles = response.data;
        console.log(articles)
        setArticles(articles)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching articles:', error);
      });
  }, [slug]);

  return (
    <div className='topics-page'>
    <h1 className="topic-title">Articles on {slug}</h1>
    <div className='article-box'>
    {isLoading ? (
            <p className='loading'>Loading...</p>
          ) : (
      articles.map((a, id) => {
        return (
            
          <article className="article" key={id}>
          <p className="article_topic">
            <span className="underline">Topic:</span>{" "}
            <span className="bold">{a.topic}</span>
          </p>
          <p className="article_author">
            <span className="underline">Contributed by:</span>{" "}
            <span className="author-italics">{a.author}</span>
          </p>
          <h2 className="article_title">{a.title}</h2>
          <img
            id="article_img"
            src={a.article_img_url}
            alt={a.title} />
          <Link className="article-link" to={`/articles/${a.article_id}`}>
            Take A Closer Look Here
          </Link>
        </article>
        );
      }))}
    </div>
  </div>
  );
}
