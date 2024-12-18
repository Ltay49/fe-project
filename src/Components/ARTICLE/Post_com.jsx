import axiosInstance from "../../Instance";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Post_com() {
  const { articleid } = useParams();
  console.log(articleid)
  const nameValidation = /^[^\d][A-Za-z0-9_]*/;

  const [username, setUsername] = useState("");
  const [post, setPost] = useState("");
  const [submit, setSubmit] = useState(false)

  useEffect(() => {
    if (submit){
        axiosInstance.post(`/articles/${articleid}/comments`, {
            username: username,
            body: post,
          })
          .then((response)=>{
            console.log(response)
            setSubmit(false)
            setPost("")
            setUsername("")
          })
        }
  }, [submit,post,username, articleid])


  const handleChangeUser = (e) => {
    let input = e.target.value;
    setUsername(input);
  };

  const handleChangeBody = (e) => {
    console.log(e.target.value);
    let input = e.target.value;
    setPost(input);
  };

  const handleSubmit = (e) => {
    if (!nameValidation.test(username)) {
      e.preventDefault();
    }
    else {
        setSubmit(true)
    }
  };

  return (
    <section className="post-comment">
      <form onSubmit={handleSubmit}>
        <p>Add your own comment here</p>
        <br />
        1. Enter your Username - must start with a letter / if you dont have a
        username remeber to sign up
        <br />
        2. Type your comment
        <p>
        <label htmlFor="name"></label>
          <input
            type="text"
            maxLength="20"
            id="name"
            name="user_name"
            placeholder="username here..."
            value={username}
            onChange={handleChangeUser}
          />
        </p>
        <p>
          <label htmlFor="post-comment"></label>
          <textarea
            maxLength="300"
            id="post-comment"
            placeholder="Write your comment here..."
            onChange={handleChangeBody}
            name="comment"
            value={post}
          ></textarea>
        </p>
        <button id="post-btn">Post</button>
      </form>
    </section>
  );
}
