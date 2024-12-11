import "./Productdetails.css";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";

function Productdetails(){

    const[productDetails,setproductDetails]=useState(
        {
            id:0,
            title:"",
            image:"",
            price:0,
            rating:{
                rate:0,
                count:0
            },
            description:"",
        }
    )
    useEffect(()=>{
        axios.get(`http://localhost:3000/products/${id}`).then((res)=>{console.log(res.data), setproductDetails(res.data)}).catch((error)=>{alert("something went wrong")})
    }, [ ])
    let {id}=useParams()
    return(
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <img src={productDetails.image} width={"100%"} style={{padding:"20px"}}/>
                </div>
                <div className="col-8">
                    <dl>
                        <dt>Name</dt>
                        <dd>{productDetails.title}</dd>
                        <dt>Price</dt>
                        <dd>${productDetails.price}</dd>
                        <dt>rating</dt>
                        <dd>{productDetails.rating.rate}</dd>
                        <dt>description</dt>
                        <dd>{productDetails.description}</dd>
                    </dl>
                    <button className="btn btn-primary mx-2">Add to cart</button>
                    <button className="btn btn-danger mx-2">Order Now</button>
                </div>
            </div>
            
        </div>
    )
}
export default Productdetails;