import axios from "axios"

export function electronicserverdata(){
   return axios.get("http://localhost:3000/categories_electronics")
}
