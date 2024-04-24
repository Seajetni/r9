import React from "react";
import { NavbarDefault } from "./nav";
import Slider from "./home/slider";

export default function Layout(props) {
  return (
    <div>
      <NavbarDefault />
      <div className=" h-96">
        <Slider />
      </div>
      <div className=" flex ">
         <div className=" lg:w-1/6 bg-deep-orange-100  ">
  
         </div>
         <div className="  w-full bg-[url('https://th.bing.com/th/id/OIP.In5UvDF83cHj4mAvi8owyQAAAA?rs=1&pid=ImgDetMain')] bg-cover   bg-top   ">
        
           <div className="bg-opacity-75 bg-white w-full  h-full">
           {props.children}
           </div>
         
         </div>
      </div>
     
    </div>
  );
}
