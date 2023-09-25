import { Link } from "react-router-dom"

const Navbar = ({addFunc}) => {
    return (
        <div className="navigation">
            <Link to={'/developer-project/'} onClick={addFunc}>Main</Link>
            <Link to={'/developer-project/companies'} onClick={addFunc}>Companies</Link>
            <Link to={'/developer-project/about'} onClick={addFunc}>About</Link>
            <Link to={'/developer-project/contact'} onClick={addFunc}>Contacts</Link>
        </div>
    )
}

export default Navbar