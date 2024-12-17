import { useEffect } from "react"

export default function Votes(){

    useEffect(()=>{

    })

    return (<section className="votes">
    <section className="btns">
        <button className="vote-btn-add">👍</button>
      <button className="vote-btn-minus" >👎 </button>
      </section>
      <p id="vote-text">*place your votes thumbs up+1, thumbs down-1</p>
      </section>
    )
}