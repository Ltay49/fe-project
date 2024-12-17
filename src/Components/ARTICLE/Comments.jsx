import { useParams} from "react-router-dom"
import axiosInstance from "../../Instance"
import { useState, useEffect } from "react"


export default function Comments(){
   const {articleid} = useParams()
   const [isLoading, setIsLoading] = useState(false)
   const [comments, setComments] = useState({})

   useEffect(() => {
      setIsLoading(true)
      axiosInstance.get(`/articles/${articleid}/comments`)
      .then((response)=>{
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
<section className="comments-box">
<p className="commentCr">posted on:{comments.created_at}</p>
<p className="commentA">posted by:{comments.author}</p>
<p className="comment">{comments.body}</p>
<p className="comment_vote">Votes {comments.votes}!</p>
<button className="vote-btn">Vote Here</button>
</section>

   )

}