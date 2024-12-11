import React, { useEffect, useState } from "react";
import { homeserverdata } from "../component/service/homeserver/homeserver";
import { Link } from "react-router-dom";
import axios from "axios";
import addcartaction from "../addcartaction";
import { useDispatch } from "react-redux";
import "./Home.css"

function Home() {
    var dispatch=useDispatch()
    const [homedata, setHomedata] = useState([]);
  
 

    useEffect(() => {
        homeserverdata().then((res) => {
                
            setHomedata(res.data); 
        }).catch((error) => {
            alert("Something went wrong");
        });
    }, []); 

  

   function addcart(product){
        axios.post("http://localhost:3000/addToCart",product).then(()=>{alert("added to cart")}).catch(()=>{alert("error")})
   }

    return (
        <div>
            <h2 className="text-success m-2">Home</h2>
            <p style={{ margin: "9px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam sequi ipsam, beatae odit sit minus incidunt quos...
            </p>
            <div className="d-flex flex-wrap justify-content-evenly">
                {
                    homedata.map((element) => (
                        <div className="card w-25 mx-2 gap-2" style={{ height: "450px" }}>
                            <div className="card-header">
                                <img src={element.image} alt="Product" style={{ width: "100%", height: "200px" }} />
                            </div>
                            <div className="card-body">
                                <h6>{element.title}</h6>
                                <p>Price = ${element.price}</p>
                                <p>Rating = {element.rating.rate}</p>
                               <Link to={`/productDetails/${element.id}`}><button className="btn btn-primary mx-1">Product details</button></Link>
                                <button className="btn btn-danger mx-1" onClick={()=>{addcart(element)}}>Add to cart</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Home;
