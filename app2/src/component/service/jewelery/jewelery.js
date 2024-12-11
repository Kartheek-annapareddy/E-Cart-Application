import axios from "axios";

export function jeweleryserverdata(){
    return axios.get("http://localhost:3000/categories_jewelery")
}