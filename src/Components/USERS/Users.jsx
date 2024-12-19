
import { useEffect, useState } from "react"
import axiosInstance from "../../Instance"
import SignInButton from "./SignInButton"

export default function Users(){

const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(false)

useEffect(()=>{
setIsLoading(true)
axiosInstance('/users')
.then((response)=>{
    console.log(response.data)
    setUsers(response.data)
    setIsLoading(false)
})
},[])
return (
    <div className="users-page">

        <section className="users-current">
            {users.map((user, id) => (
            <article className="user" key={id}>
            <ul>
                <p>{user.username}</p>
                <img id="user-img" src={user.avatar_url}></img>
                <SignInButton username={user.username}/>
            </ul>
            </article> 
        ))}
        </section>
        <section className="user-new"></section>
    </div>
)
}
