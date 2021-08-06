import * as React from "react"
import { Link } from "gatsby"

const Nav = () => (
    <nav className="navbar">
        <div className="nav-title">
            <Link to="/">adriane <br/>
                         spence
            </Link>      
        </div>
        <div className="nav-items">
        <Link to="/">work</Link>
        <Link to="/contact">contact</Link>
        <Link to="/About">about</Link>
        </div>
    </nav>
)

export default Nav