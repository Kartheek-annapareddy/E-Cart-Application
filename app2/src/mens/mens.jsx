import { useState } from "react";
import { menserverdata } from "../component/service/mensserver/mens";
import { Link } from "react-router-dom";



function Mens(){
    var[mensdata,setmensdata]=useState([])
    function getmensdata(){
        menserverdata().then((res)=>{
            console.log(res.data);
            setmensdata(res.data);

        }).catch((error)=>{
            console.log("something wrong");
        })
    }
    return(
        <div>
            <h2 style={{padding:"10px"}}>Mens cloths</h2>
            <p style={{padding:"10px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur molestiae ipsum tempore saepe magnam. Enim amet illo, quisquam assumenda deserunt praesentium earum tempora debitis at quas facilis quasi magni dolorem, ducimus quibusdam nobis quia quidem molestias. Recusandae similique exercitationem cum ipsam totam et, iusto atque in earum. Nisi veniam autem, obcaecati harum molestiae minus accusantium amet, impedit repudiandae ab rerum reprehenderit iusto, nemo voluptas deleniti. Corrupti non dolorum necessitatibus mollitia, provident eum nisi exercitationem perferendis distinctio ut rerum voluptate, rem odio? Quos veniam ullam doloremque quae recusandae, fugiat vitae tempore consequatur est minus, sint nesciunt esse excepturi at reprehenderit.</p>
            <button className="btn btn-secondary mx-2" onClick={getmensdata}>getmenscloth</button>
           <div>
            {
               (mensdata.length>0 && (<div className="d-flex flex-wrap justify-content-evenly">
                {
                    mensdata.map((product)=>{
                        return(<div className="card">
                            <div className="card-header"><img src={product.image} width={"100%"} height={"200px"}/></div>
                            <div className="card-body">
                                <h6 style={{height:"30px"}}>{product.title}</h6>
                                <p>price=${product.price}</p>
                                <p>rating={product.rating.rate}</p>
                                <Link to={`/productDetails/${product.id}`}><button className="btn btn-primary mx-2 gap-2">product details</button></Link>
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
export default Mens;