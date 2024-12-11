import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Profile(){
    return(
        <div className="container mt-5">
            <div className="row" style={{height:"400px"}}>
                <div className="col-4 d-flex flex-column justify-content-evenly"style={{textAlign:"center"}} ><Link className="fs-3 text-decoration-none"  to="personal-Details">personal Details</Link>
                <Link className="fs-3 text-decoration-none" to="Your-Order">Your Orders </Link><Link className="fs-3 text-decoration-none" to="Help-Support">Help & Support</Link></div>
                <div className="col-8 bg-secondary"><Outlet/></div>
            </div>
        </div>
    )
}
export default Profile;