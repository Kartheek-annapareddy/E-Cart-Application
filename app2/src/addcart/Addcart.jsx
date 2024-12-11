import React from 'react'
import { useSelector } from 'react-redux'
import mystore from '../mystore'
import { useState , useEffect } from 'react'
import axios from 'axios';


function Addcart() {
    var[cartdata,setcartdata]=useState("");

    useEffect(()=>{
        getdata();
    }, [])

    function getdata(){
        axios.get("http://localhost:3000/addToCart").then((res)=>{ setcartdata(res.data)}).catch((err)=>{alert("error")})
    }
    function getfinalproduct(id){
        axios.delete(`http://localhost:3000/addToCart/${id}`).then(()=>{alert("product removed from cart"), getdata();}).catch(()=>{alert("error")})
       
    }

   
  return (
    <div className='container-fluid'>
        <h1>cart items</h1>
        <div>
            {
               cartdata.length>0? cartdata.map((product ,key)=>{
                return(
                    <div className='d-flex 'style={{height:"150px",backgroundColor:"whitesmoke",margin:"20px"}}>
                    <img src={product.image} style={{width:"100px",height:"100px",margin:"20px"}}/>
                    <p className='mx-5 my-5'style={{fontSize:"20px",width:"350px"}}><b>{product.title}</b></p>
                    <div className='d-flex flex-column w-100px my-5'>
                        <p><b>Ratting:</b> {product.rating.rate}</p>
                        <p><b>Stock avaliable:</b> {product.rating.count}</p>
                    </div>
                    <p className='my-5' style={{fontSize:"17px",marginLeft:"70px",width:"120px"}}><b>price: $</b>{product.price}</p>
                    <button className='btn btn-primary mx-5 my-5 ' style={{width:"100px",height:"40px"}}>OrderNow</button>
                    <button className='btn btn-danger mx-5 my-5 ' onClick={()=>{getfinalproduct(product.id)}} style={{width:"100px",height:"40px"}}>Remove </button>
                    </div>
                )
            }) :<div> <h1 className='text-danger my-5'>No products avaliable in the cart</h1></div>
            }
        </div>
    
    </div>
  )
}

export default Addcart;
