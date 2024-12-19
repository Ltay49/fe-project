import axiosInstance from "../../Instance";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Post_com({ setComments }) {
  const { articleid } = useParams();
  const nameValidation = /^[^\d][A-Za-z0-9_]*/;
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmiited] = useState(false);

  const [newComment, setNewComment] = useState({
    username: "",
    body: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewComment((currNewComment) => ({
      ...currNewComment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axiosInstance
      .post(`/articles/${articleid}/comments`, newComment, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setNewComment({
          username: "",
          body: "",
        });

        axiosInstance
          .get(`/articles/${articleid}/comments`)
          .then((response) => {
            setComments(response.data);
          })
          .catch((err) => {
            console.error("Error fetching comments:", err);
          });

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error posting comment:", err);
        setIsLoading(false);
      });
  };

  return (
    <section className="post-comment">
      {isLoading ? (
        <p>Your post is in the post...📨</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>Add your own comment here</p>
          <br />
          1. Enter your Username - must start with a letter / if you don't have
          a username remember to sign up
          <br />
          2. Type your comment
          <p>
            <label htmlFor="name"></label>
            <input
              type="text"
              maxLength="20"
              id="name"
              name="username"
              placeholder="username here..."
              value={newComment.username}
              onChange={handleInput}
            />
          </p>
          <p>
            <label htmlFor="post-comment"></label>
            <textarea
              maxLength="300"
              id="post-comment"
              placeholder="Write your comment here..."
              onChange={handleInput}
              name="body"
              value={newComment.body}
            ></textarea>
          </p>
          <button id="post-btn">Post</button>
        </form>
      )}
    </section>
  );
}
