import { useState } from "react";
import { jeweleryserverdata } from "../component/service/jewelery/jewelery";
import { Link } from "react-router-dom";

function Jewelery(){
    var[jewelerydata,setjewelerydata]=useState([])

    function getjewelerydata(){
        jeweleryserverdata().then((res)=>{
            console.log(res.data)
            setjewelerydata(res.data)
        }).catch((error)=>{
            console.log("something went wrong")
        })
    }
    return(
        <div>
            <h2 style={{padding:"10px"}}>Jewelery</h2>
            <p style={{padding:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In illo architecto ex, neque quaerat assumenda alias cum laboriosam quo doloremque eveniet expedita corporis nemo, natus provident obcaecati voluptatem officiis blanditiis cumque sequi. Odio obcaecati sit corporis delectus harum vitae maiores. Provident atque placeat praesentium vero numquam sit dicta laborum, quibusdam libero, aspernatur dolores temporibus ipsum nulla nihil laudantium ex? Corrupti, soluta eligendi facere magni eos corporis natus dolore ipsum impedit cum! Ipsa laudantium quam quibusdam cum praesentium deleniti hic tempora. Excepturi veritatis voluptatibus mollitia numquam qui cupiditate, temporibus itaque sit rem velit, aperiam eum saepe ea modi pariatur, enim quam!</p>
            <button className="btn btn-secondary mx-2" onClick={getjewelerydata}>get jewelery</button>
            <div>
            {
               (jewelerydata.length>0 && (<div className="d-flex flex-wrap justify-content-evenly">
                {
                    jewelerydata.map((product)=>{
                        return(<div className="card w-25 mx-2" style={{height:"450px"}}>
                            <div className="card-header"><img src={product.image} width={"100%"} height={"200px"}/></div>
                            <div className="card-body">
                                <h6 style={{height:"50px"}}>{product.title}</h6>
                                <p>price=${product.price}</p>
                                <p>rating={product.rating.rate}</p>
                               <Link to={`/productDetails/${product.id}`}> <button className="btn btn-primary mx-3 gap-3">product details</button></Link>
                                <button className="btn btn-danger mx-2 gap-2">add to cart</button>
                            </div>
                        </div>)
                    })
                }
               </div>))
            }
            </div>
        </div>
    )
}

export default Jewelery;