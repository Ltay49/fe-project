import { useEffect, useState } from "react";
import axiosInstance from "../../Instance";

export default function Votes({ currentCount, commentId }) {
    
  const [voteCounter, setVoteCounter] = useState(currentCount);

  useEffect(() => {
    setVoteCounter(currentCount);
  }, [currentCount]);

  const onClickHandlerPlus = () => {
    setVoteCounter((prevVoteCount) => prevVoteCount + 1);
    sendVoteUpdate(1);
  };

  const onClickHandlerMinus = () => {
    setVoteCounter((prevVoteCount) => prevVoteCount - 1);
    sendVoteUpdate(-1);
  };

  const sendVoteUpdate = (voteChange) => {
    axiosInstance.patch(`/comments/${commentId}`, {
      inc_votes: voteChange,
    });
  };

  return (
    <section className="votes">
      <p className="comment_vote">Votes {voteCounter}!</p>
      <section className="btns">
        <button className="vote-btn-add" onClick={onClickHandlerPlus}>
          👍
        </button>
        <button className="vote-btn-minus" onClick={onClickHandlerMinus}>
          👎
        </button>
      </section>
      <p id="vote-text">*Place your votes thumbs up +1, thumbs down -1</p>
    </section>
  );
}
