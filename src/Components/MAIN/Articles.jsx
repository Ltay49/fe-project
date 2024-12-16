import { Link } from "react-router-dom";

export default function Articles({ articles }) {


  
  return (
    <section className="articles-container">
      {articles.map((article, index) => (
        <article className="article" key={index}>
          <p className="article_topic">
            <span className="underline">Topic:</span>{" "}
            <span className="bold">{article.topic}</span>
          </p>
          <p className="article_author">
            <span className="underline">Contributed by:</span>{" "}
            <span className="author-italics">{article.author}</span>
          </p>
          <h2 className="article_title">{article.title}</h2>
          <img
            id="article_img"
            src={article.article_img_url}
            alt={article.title}
          />
          <Link className="article-link" to={`/articles/${article.article_id}`}>
            Take A Closer Look Here
          </Link>
        </article>
      ))}
    </section>
  );
}
