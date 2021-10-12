import { useState } from "react"
import Image from"next/image"
import Navbar from "../components/containers/navbar"
export default function Index(){
    const [name,setName] = useState("Channry");
    function changeName(name1){
        setName(name1);
    }
    return(
    <div>
          <b><Navbar lable="LOGIN ACCOUNT"/></b>
          <p>My name is {name}</p>
          <button onClick={()=>{changeName("Nhem Chanry")}}> Change to Nhem channry</button>

    </div>
        
    )
}