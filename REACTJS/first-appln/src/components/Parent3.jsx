import { useState } from "react";
import Child3 from "./Child3.jsx"
const Parent3 = ()=>{
    const [msg,setMsg]=useState("Hello");
    const [arr,setArr]=useState([10,20,30,40,50]);
    const[bool,setBool]=useState(true);
    const[obj,setObj]=useState({"frontend":"ReactJS","backend":"NodeJS"});
    const[list,setList]=useState([{"sid":111,"sname":"sone","sage":20},
                                 {"sid":222,"sname":"stwo","sage":22},
                                 {"sid":333,"sname":"sthree","sage":24},
                                 {"sid":444,"sname":"sfour","sage":26},
                                 {"sid":555,"sname":"sfive","sage":28}]);
    return(
        <>
            <Child3 msg={msg} arr={arr} bool={bool} obj={obj} list={list}></Child3>
        </>
    )
}
export default Parent3;