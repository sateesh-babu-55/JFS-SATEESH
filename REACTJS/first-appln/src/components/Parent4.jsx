import { useState } from "react";
import Child4 from "./Child4.jsx"
const Parent4 =()=>{
    const[msg,setMsg]=useState("Hello");
    const[num,setNum]=useState(100);
    return(
        <>
            <Child4 msg={msg} num={num} ></Child4>
        </>
    )
}
export default Parent4;