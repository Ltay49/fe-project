
import { useEffect, useState } from "react"
import axiosInstance from "../../Instance"
import SignInButton from "./SignInButton"
import UserPage from "./UserPage";
import { useUser } from "../../UserContext";

export default function Users(){

const [users, setUsers] = useState([])
const [isLoading, setIsLoading] = useState(false)
const { profile, setProfile} = useUser();


useEffect(()=>{
setIsLoading(true)
axiosInstance.get('/users')
.then((response)=>{
    setUsers(response.data)
    setIsLoading(false)
})
},[])
return (
    <div className="users-page">
        {profile ? (
        <UserPage profile={profile} setProfile={setProfile}/>):(
        <section className="users-current">
            {users.map((user, id) => (
            <article className="user" key={id}>
            <ul>
                <p>{user.username}</p>
                <img id="user-img" src={user.avatar_url}></img>
                <SignInButton name={user.name} username={user.username} avatar={user.avatar_url} />
            </ul>
            </article> 
        ))}
        </section>
        )}
    </div>
)
}
