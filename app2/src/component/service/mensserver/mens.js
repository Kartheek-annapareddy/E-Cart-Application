import axios from "axios"


 export function menserverdata(){
    return axios.get("http://localhost:3000/categories_mensclothing")
}


