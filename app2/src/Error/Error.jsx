import "./Error.css"
import { Link } from "react-router-dom";

function Error(){
    return(
        <div className="errorcont">
            <div className="errorcont1"> <h1>OOPS</h1>
            <p>page not found</p>
            <Link to=""><button>Goto Home</button></Link></div>
           <div className="errorcont2">
            <img src="https://www.shutterstock.com/image-vector/oops-404-error-web-site-260nw-1889722093.jpg"/>
           </div>
        </div>
    )
}

export default Error;