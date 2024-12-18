import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axiosInstance from "../../Instance"

export default function ArticleVote({articleVotes}){

    const {articleid} = useParams()

    const [aVotes, setAvotes] = useState(articleVotes)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setAvotes(articleVotes)
    },[articleVotes])

    const updateVote = (change) => {
        setAvotes((prevVote) => prevVote + change); 
        voterUpdate(change);
    }

    const onClickHandlerPlus = () => updateVote(1);
    const onClickHandlerMinus = () => updateVote(-1);

    const voterUpdate=(voteChange)=>{
        setError(null)
        axiosInstance.patch(`/articles/${articleid}`,{
            inc_votes: voteChange
        }).catch((err) =>{
            setAvotes((prevVote) => prevVote - voteChange)
            setError("Your vote was not successful. Please try again!")

        })
    }

    return (
        <section className="Avotes">
        <p className="Acomment_vote">Votes {aVotes}!</p>
        {error ? <p>{error}</p> : null}
        <section className="btns">
          <button className="Avote-btn-add" onClick={onClickHandlerPlus}>
            👍
          </button>
          <button className="Avote-btn-minus" onClick={onClickHandlerMinus}>
            👎
          </button>
        </section>
        <p id="Avote-text">*Place your votes thumbs up +1, thumbs down -1</p>
      </section>
    )
}