import axios from "axios";
export function homeserverdata(){
   return  axios.get("http://localhost:3000/products")
}