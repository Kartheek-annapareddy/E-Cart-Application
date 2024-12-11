import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="header">
            <div className="header-1">
                <h1>My Mart</h1>
            </div>
            <div className="header-2">
               <Link to="/">Product</Link>
               <Link to="/Electronics">Electronic</Link>
               <Link to="/Jewelery">Jeweler</Link>
               <Link to="/Mens">Men</Link>
               <Link to="/Womens">Women</Link>
            </div>
            <div className="header-3">
               <Link to="/profile">Profil</Link>
       <Link to="/addcart">Cart</Link>
       <Link to="">wishlis</Link>
        <button className="btn btn-outline-primary">Logout</button>
        </div>
        </div>
    )
}

export default Navbar;