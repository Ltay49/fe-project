import { useParams } from "react-router-dom";
import axiosInstance from "../../Instance";
import { useState, useEffect } from "react";
import Votes from "./Votes";
import Post_com from "./Post_com";
import { useUser } from "../../UserContext";
import DeleteBtn from "./DeleteBtn";

export default function Comments() {
   const { articleid } = useParams();
   const [isLoading, setIsLoading] = useState(false);
   const [comments, setComments] = useState([]);
   const { profile} = useUser();
   
   useEffect(() => {
      setIsLoading(true);
      axiosInstance.get(`/articles/${articleid}/comments`)
         .then((response) => {
            setComments(response.data);
            setIsLoading(false);
         })
   }, [articleid]);

   if (isLoading) {
      return <>Loading...</>;
   }
console.log(comments)
   return (
      <>
         {comments.length > 0 ? (
            comments.map((comment, id) => (
               <section className="comments-box" key={id}>
                  <section className="comment-box">
                     <p className="commentCr">posted on: {comment.created_at}</p>
                     <p className="commentA">posted by: {comment.author}</p>
                     <p className="comment">{comment.body}</p>
                     {profile?.username === comment.author && ( <DeleteBtn commentId={comment.comment_id} setComments={setComments}/>)}
                     <Votes currentCount={comment.votes} commentId={comment.comment_id} />
                  </section>
               </section>
            ))
         ) : (
            <p>no comment here yet</p>
         )}
       <Post_com setComments={setComments}/>
      </>
   );
}