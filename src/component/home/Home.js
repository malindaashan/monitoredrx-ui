import React, { useContext } from "react";
import HomeDrawer from './HomeDrawer';
 const  MainHome = ({page})=>{

  return (
  <div>
  {/* <HomeHeader/> */}
   <HomeDrawer
   page ={page}
   />
   
 </div>
  )
}

export default MainHome;