import { NavLink } from "react-router-dom"
import './navbar.css'

export default function NavBar() {
  return (
    <div>
        <ul>
            <li>
            <NavLink className={({isActive})=>isActive ? 'active' : ""} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive})=>isActive ? 'active' : "blue"} to="/about">About</NavLink>
            </li>
            <li>
            <NavLink className={({isActive})=>isActive ? 'active' : ""} to="/users">Users</NavLink>
            </li>
        </ul>
    </div>
  )
}
