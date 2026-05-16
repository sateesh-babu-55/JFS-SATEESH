import { useState } from "react";
import First from "./First";
import Second from "./Second";
const StateEx1 = () =>{
    const [num1,setNum1] = useState(100);
    const [num2,setNum2] = useState(200);
    const [str,setStr] = useState("Hello");

    const [flag,setFlag] = useState(true);

    const [arr1,setArr1] = useState([10,20,30,40,50]);


    return(
        <>

            {
                arr1.map((element,index)=>{
                    return <h1 key={index}>{element}</h1>
                })
            }
            <hr></hr>
            {
                flag ? <First></First> : <Second></Second>
            }   

            {
                !flag ? <First></First> : <Second></Second>
            }
            {
                flag ? <h1>{num1}</h1> : <h1>{num2}</h1>
            }
             {
                !flag ? <h1>{num1}</h1> : <h1>{num2}</h1>
            }
            <h1>{num1}</h1>
            <h1>{num2}</h1>
            <h1>Addition of {num1},   {num2} is: {num1+num2}.</h1>
            <h1>subtraction of {num1},   {num2} is: {num1-num2}.</h1>
            <h1>multiplication of {num1},   {num2} is: {num1*num2}.</h1>
            <h1>Division of {num1},   {num2} is: {num1/num2}.</h1>
            <h1>{Math.sqrt(num2)}</h1>
            <h1>{str}</h1>
        </>
    )
    

}
export default StateEx1;