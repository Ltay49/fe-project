import { useParams } from "react-router-dom";
import axiosInstance from "../../Instance";
import { useState, useEffect } from "react";
import Votes from "./Votes";

export default function Comments() {
   const { articleid } = useParams();
   const [isLoading, setIsLoading] = useState(false);
   const [comments, setComments] = useState([]);
   const [message, setMessage] = useState("");

   useEffect(() => {
      setIsLoading(true);
      axiosInstance.get(`/articles/${articleid}/comments`)
         .then((response) => {
            if (response.data.msg) {
               setMessage(response.data.msg);
            } else {
               setComments(response.data);
            }
            setIsLoading(false);
         })
   }, [articleid]);

   if (isLoading) {
      return <>Loading...</>;
   }

   return (
      <>
         {comments.length > 0 ? (
            comments.map((comment, id) => (
               <section className="comments-box" key={id}>
                  <section className="comment-box">
                     <p className="commentCr">posted on: {comment.created_at}</p>
                     <p className="commentA">posted by: {comment.author}</p>
                     <p className="comment">{comment.body}</p>
                     <Votes currentCount={comment.votes} commentId={comment.comment_id} />
                  </section>
               </section>
            ))
         ) : (
            <p>{message}</p>
         )}
         <section className="post-comment">
            <form>
               <p>Add your own comment here</p>
               <br />
               1. Enter your Username
               <br />
               2. Type your comment
               <p>
                  <label htmlFor="name"></label>
                  <input
                     type="text"
                     id="name"
                     name="user_name"
                     placeholder="username here..."
                  />
               </p>
               <p>
                  <label htmlFor="post-comment"></label>
                  <textarea
                     id="post-comment"
                     placeholder="write your comment here..."
                     name="comment"
                  ></textarea>
               </p>
            </form>
            <button id="post-btn">Post</button>
         </section>
      </>
   );
}