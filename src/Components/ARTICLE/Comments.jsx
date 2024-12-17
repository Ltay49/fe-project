import { useParams} from "react-router-dom"
import axiosInstance from "../../Instance"
import { useState, useEffect } from "react"
import Votes from "./Votes"


export default function Comments(){
   const {articleid} = useParams()
   const [isLoading, setIsLoading] = useState(false)
   const [comments, setComments] = useState([])

   useEffect(() => {
      setIsLoading(true)
      axiosInstance.get(`/articles/${articleid}/comments`)
      .then((response)=>{
         console.log(response.data)
         const comment = response.data
         setComments(comment)
         setIsLoading(false)
      })
   }, [articleid])
   

if(isLoading){
   return <>
   is Loading...
   </>
}

return (
   <>
     {comments.map((c, index) => (
       <section className="comments-box" key={index}>
         <section className="comment-box">
         <p className="commentCr">posted on: {c.created_at}</p>
         <p className="commentA">posted by: {c.author}</p>
         <p className="comment">{c.body}</p>
         <p className="comment_vote">Votes {c.votes}!</p>
         <Votes comments={comments}/>
         </section>
       </section>
     ))}
   </>
 );

}