import { useState } from "react"
import { Link } from "react-router-dom"

const Title = () => (
    <a href="/">
        <img
            className="logo"
            alt="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        />
    </a>
)

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li> <Link to='/'  > Home</Link> </li>
                    <li>  <Link to='/about' >About </Link>                           </li>
                    <li>  <Link to='/contact' >Contact </Link>                           </li>



                    <li>Cart</li>
                    <li>
                        {loggedIn ? (
                            <button
                                onClick={() => {
                                    setLoggedIn(false)
                                }}
                            >
                                Login
                            </button>
                        ) : (
                            <button
                                onClick={() => {
                                    setLoggedIn(true)
                                }}
                            >
                                Logout
                            </button>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
