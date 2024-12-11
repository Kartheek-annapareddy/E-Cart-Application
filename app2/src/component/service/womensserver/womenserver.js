import axios from "axios";

export function womenserver(){
    return axios.get("http://localhost:3000/categories_womensclothing")
}