import "./electronics.css"
import { electronicserverdata } from "../component/service/electronic/electronicserver"
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function Electronics(){
    const[electronicdata,setelectronicdata]=useState([]);


    function getelectronicdata(){
        electronicserverdata().then((res)=>{
            console.log(res.data);
            setelectronicdata(res.data)
        }).catch((error)=>{
            alert("some thing went wrong")
        })
    }

    function addtocart(product){
       axios.post("http://localhost:3000/addToCart",product).then(()=>{alert("product added in the cart")}).catch(()=>{alert("failed to add in the cart")})
    }
    return(
        <div>
            <h2 className="text-success m-2">Electronics</h2>
            <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut commodi similique possimus iste praesentium pariatur? Mollitia, iusto? Iure blanditiis reprehenderit nesciunt ducimus placeat neque minus laudantium nam unde non eius hic pariatur, explicabo quas culpa velit quidem, distinctio atque, totam ullam maiores aspernatur nostrum accusantium! Accusantium distinctio reiciendis iure et enim, accusamus cupiditate doloribus! Recusandae, eligendi quo a, impedit cumque sunt adipisci tempore, et molestias aliquid quae quidem ipsa aperiam dolor consequuntur! Ipsa debitis libero maiores possimus, blanditiis optio at, quasi dignissimos earum autem vero saepe, labore recusandae. Asperiores soluta nostrum nulla culpa. Autem dolore nihil quam non maiores!</p>
            <button className="btn btn-secondary m-2" onClick={getelectronicdata}>get users data</button>
            <div>
                {
                    electronicdata.length>0 && (
                        <div className="d-flex flex-wrap justify-content-evenly">
                            {
                                electronicdata.map((product)=>{
                                    return(
                                        <div className="card w-25 mx-2 gap-2"style={{height:"450px"}}>
                                <div className="card-header"><img src={product.image} width={"100%"} height={"200px"} /></div>
                                <div className="card-body">
                                    <h6>{product.title}</h6>
                                    <p>price=${product.price}</p>
                                    <p>rating={product.rating.rate}</p>
                                    <Link to={`/productDetails/${product.id}`}><button className="btn btn-primary mx-1">product details</button></Link>
                                    <button className="btn btn-danger mx-1" onClick={()=>{addtocart(product)}}>add to cart</button>
                                </div>
                                </div>
                                    )
                                })
                            }
                        </div>
                    )
                }
                </div> </div>
           
    )
}
export default Electronics;