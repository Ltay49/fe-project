import { Link } from "react-router-dom";

export default function NavBar(){

    return (

<nav className="nav-bar">
      <section className="links">
        <Link id="home_link"to="/">Home</Link>
        <Link id="users_link"to ="/Users">Users</Link>
        <Link id="users_link"to ="/Users">Topics</Link>

        </section>
        </nav>
    )
}