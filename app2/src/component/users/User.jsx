import "./User.css"
import React from "react"

function User({user}){
    return(
        <div className="card">
            <img src={user.picture.medium} width={"100%"} height={"200px"}/>
            <h3>{user.name.title}.{user.name.frist} {user.name.last}</h3>
            <p>{user.gender}</p>
            <button>get users</button>
        </div>
    )
}
export default User;