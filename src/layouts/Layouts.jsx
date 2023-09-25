import { Outlet } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { useState } from "react"
import Navbar from "../components/Navbar"


const Layouts = () => {
    const [toggle, setToggle] = useState(true)
    const handleClick = () => setToggle(!toggle)

    return (
        <div>
            <div className={toggle ? "header-close" : "header-open"}>
                <div className="nav-conatiner">
                    <h1 className="logo">Logo</h1>
                    <div onClick={handleClick}>
                        <FaBars className="fabars"/>
                    </div>
                </div>
                <div className={toggle ? "navigation-close" : "navigation-open"}>
                    <Navbar addFunc={handleClick}/>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Layouts