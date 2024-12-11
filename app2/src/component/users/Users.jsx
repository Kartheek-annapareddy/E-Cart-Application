import User from "./User";
import "./Users.css";
import getuser from "../service/axios";
import { useState } from "react";

function Users(){
    var[user,setuser]=useState([])
    var[filter,setfilter]=useState("all")
    var[filteruser,setfilteruser]=useState([])

    function userdata(){
       var promiseobject = getuser()
        promiseobject.then((user)=>{
            console.log(user.data.results)
            setuser(user.data.results)
            applyfilter(user.data.results,filter)
        }).catch((error)=>{
            alert("check again")
        })}
        function applyfilter( users,filter){
            if(filter === "men"){
               setfilteruser( users.filter((user)=>
                  user.gender ==="male"
                ))}
            else if(filter === "women"){
                setfilteruser( users.filter((user)=>
                    user.gender ==="female"
                  ))
            }
            else{setfilteruser(users)}
            }
                    
        function handlefilter(event){
          var filtervalue= event.target.value;
          setfilter(filtervalue)
          applyfilter(user,filtervalue)
        }
    return(
        <div>
            <h2>datalist</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa aspernatur a eos. Magnam delectus fugiat, omnis ducimus, dolorem nemo accusantium corrupti sapiente, perspiciatis adipisci doloremque explicabo. Natus, totam laborum blanditiis voluptate sequi modi aspernatur iste. Tempora atque, consequuntur ipsam, inventore ratione beatae architecto aliquam facilis commodi harum in maxime placeat numquam quasi tenetur, explicabo veniam a doloribus quisquam ex maiores ut ab illum? Nam eius alias possimus ipsam? Voluptatem quibusdam inventore eveniet rerum neque nam, laborum, alias libero aspernatur eius nisi autem tempora accusamus molestias magnam laboriosam eos dolorum numquam, porro dolorem doloremque recusandae? Suscipit impedit quo cupiditate hic voluptates minus necessitatibus error quae odio officia earum est nulla sed, inventore beatae cumque a vitae ad officiis dolore sunt reiciendis adipisci! Necessitatibus vel tempore inventore quae quasi fugit, doloribus laborum qui alias tempora dolorum, adipisci natus modi ipsum reiciendis iure delectus nostrum, reprehenderit maiores quidem similique consequatur repudiandae animi blanditiis. Voluptas eligendi nobis aspernatur aperiam sapiente nam rerum autem voluptatum expedita dolorum, beatae magni labore, mollitia obcaecati enim quae dicta, a aliquam necessitatibus ab vitae! Suscipit nihil necessitatibus quam libero enim laboriosam cum, deleniti architecto. Itaque, animi omnis perferendis quam tenetur quo aut sequi nostrum amet deleniti officiis atque exercitationem ducimus rerum nulla quia sint numquam quasi tempore incidunt sed eaque ratione repellat fugiat! Rem nobis libero sint tenetur cupiditate, nulla quas itaque quis aut repudiandae enim voluptate, necessitatibus debitis dolores eum eligendi, ipsa dicta omnis numquam est. Laborum deleniti tempore in doloribus recusandae. Labore nesciunt incidunt iste ab?</p>
             <button onClick={userdata}>getuser</button>
             {user.length>0 && (
               <div> <input type="radio" name="yt" value="all" checked={filter === "all"} onChange={handlefilter}/>ALL
                <input type="radio"  name="yt" value="men" checked={filter === "men"} onChange={handlefilter}/>MEN
                <input type="radio"  name="yt" value="women" checked={filter === "women"} onChange={handlefilter}/>WOMEN
                </div>
             )}

             {user.length>0 ? <div className="datalist">
              { filteruser.map((element,index)=>{
               return <User user={element} />
               })}
             </div> : <h3>click to get data</h3>}
             </div>
    )
}

export default Users;






// import User from "./User";
// import "./Users.css";
// import getuser from "../service/axios";
// import { useState, useEffect } from "react";

// function Users() {
//   let [user, setuser] = useState([]);
//   let [filter, setFilter] = useState("ALL"); // state to store selected filter
//   let [filteredUsers, setFilteredUsers] = useState([]); // state to store filtered users

//   // Function to fetch user data
//   function userdataclick() {
//     var promiseobject = getuser();
//     promiseobject
//       .then((response) => {
//         console.log(response.data.results);
//         setuser(response.data.results);
//         applyFilter(response.data.results, filter); // Apply filter when data is fetched
//       })
//       .catch((error) => {
//         alert("Something went wrong");
//       });
//   }

//   // Function to apply the filter
//   function applyFilter(users, selectedFilter) {
//     if (selectedFilter === "men") {
//       setFilteredUsers(users.filter((user) => user.gender === "male"));
//     } else if (selectedFilter === "women") {
//       setFilteredUsers(users.filter((user) => user.gender === "female"));
//     } else {
//       setFilteredUsers(users); // For "ALL", show all users
//     }
//   }

//   // Handle radio button change
//   function handleFilterChange(event) {
//     const selectedFilter = event.target.value;
//     setFilter(selectedFilter);
//     applyFilter(user, selectedFilter); // Apply filter on radio button change
//   }

//   return (
//     <div>
//       <h2>User Information</h2>
//       <p>Lorem ipsum dolor sit amet...</p>
//       <button onClick={userdataclick}>Get Users Data</button>

//       {user.length > 0 && (
//         <div>
//           <input
//             type="radio"
//             name="filter"
//             value="ALL"
//             checked={filter === "ALL"}
//             onChange={handleFilterChange}
//           />{" "}
//           ALL
//           <input
//             type="radio"
//             name="filter"
//             value="men"
//             checked={filter === "men"}
//             onChange={handleFilterChange}
//           />{" "}
//           Men
//           <input
//             type="radio"
//             name="filter"
//             value="women"
//             checked={filter === "women"}
//             onChange={handleFilterChange}
//           />{" "}
//           Women
//         </div>
//       )}

//       <div className="datalist">
//         {filteredUsers.map((element, index) => {
//           return <User key={index} user={element} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default Users;
