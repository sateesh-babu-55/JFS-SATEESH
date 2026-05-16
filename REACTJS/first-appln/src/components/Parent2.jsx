import Child2 from "./Child2.jsx"
import { useState } from "react"
const Parent2=()=>{
    const [msg,setMsg]=useState("hello");
    const[bool,setBool]=useState(true);
    const[num,setNum]=useState([10,20,30,40,50]);
    const[obj,setObj]=useState({"frontend":"ReactJS","backend":"NodeJS"});
    const[list,setList]=useState([{"sid":111,"sname":"sone","sage":20},
                                 {"sid":222,"sname":"stwo","sage":22},
                                 {"sid":333,"sname":"sthree","sage":24},
                                 {"sid":444,"sname":"sfour","sage":26},
                                 {"sid":555,"sname":"sfive","sage":28}]);
    return(
        <>
            <Child2 msg={msg} bool={bool} num={num} obj={obj} list={list}></Child2>
        </>
    )
}
export default Parent2;