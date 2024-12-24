import { Link } from "react-router-dom";
import { useState } from "react";
import Topics from "../TOPICS/Topics";

export default function NavBar(){

    const [isDropdownOpen, setDropdownOpen] = useState(false); 

    const toggleDropdown = () => {
      setDropdownOpen(!isDropdownOpen);
    };
    return (

<nav className="nav-bar">
      <section className="links">
        <Link id="home_link"to="/">Home</Link>
        <Link id="users_link"to ="/Users">Users</Link>
        
        <div className="dropdown">
          <button className="dropdown-button" onClick={toggleDropdown}>
            Topics ⇩
          </button>

          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Topics />
            </div>
          )}
</div>
        </section>
        </nav>
    )
}