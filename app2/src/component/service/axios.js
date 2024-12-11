import axios from "axios"
function getuser(){
  var promiseobject= axios.get("https://randomuser.me/api/?results=28")
  return promiseobject;
}
export default getuser;