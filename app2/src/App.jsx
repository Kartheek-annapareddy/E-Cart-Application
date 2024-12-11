import { useState } from 'react'
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Users from './component/users/users';
import Navbar from './component/navbar/navbar';
import Electronics from './electronics/electronics';
import Mens from './mens/mens';
import Womens from './womens/women';
import Jewelery from './jewelery/jewelery';
import Home from './Home/Home';
import Productdetails from './productdetails/productdetails';
import Error from './Error/Error';
import Profile from './profile/profile';
import PersonalDetails from './profile/PersonalDetails';
import Helpsupport from './profile/Help&support';
import YouOrders from './profile/YouOrders';
import Addcart from './addcart/Addcart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path={"/"} element={<Home/>} />
      <Route path={"/Electronics"} element={<Electronics/>} />
      <Route path={"/Mens"} element={<Mens/>} />
      <Route path={"/Womens"} element={<Womens/>} />
      <Route path={"/Jewelery"} element={<Jewelery/>} />
      <Route path={"/productDetails/:id"} element={<Productdetails/>}/>

      <Route path={"/profile"} element={<Profile/>}>
      <Route index path="" element={<PersonalDetails/>}/>
      <Route path={"personal-Details"} element={<PersonalDetails />}/>
      <Route path={"Help-Support"} element={<Helpsupport/>}/>
      <Route path={"Your-Order"} element={<YouOrders/>}/>
      </Route>
      <Route path={"/addcart"} element={<Addcart/>}/>
      <Route path={"*"} element={<Error/>}/>
      </Routes>
   
    
    </>
  )
}

export default App;
