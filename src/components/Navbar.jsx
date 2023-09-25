import { Link } from "react-router-dom"

const Navbar = ({addFunc}) => {
    return (
        <div className="navigation">
            <Link to={'/'} onClick={addFunc}>Main</Link>
            <Link to={'/companies'} onClick={addFunc}>Companies</Link>
            <Link to={'/about'} onClick={addFunc}>About</Link>
            <Link to={'/contact'} onClick={addFunc}>Contacts</Link>
        </div>
    )
}

export default Navbar