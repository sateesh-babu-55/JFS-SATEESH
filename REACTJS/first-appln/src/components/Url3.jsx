import axios from "axios"
import { useState, useEffect } from "react"
const Url3 = () =>{
        const [officer,setOfficer] = useState([]);
        const extract_data = async()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/comments");
        setOfficer(data);
        console.log(data);    
        }
    useEffect(()=>{
        extract_data();
    },[]);
    return(
        <>
        {

            <table border={1}
                   align="cneter"
                   cellPadding={20}
                   cellSpacing={20} >

                <thead>
                    <tr>
                        <td>postId</td>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        officer.map((element,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{element.postId}</td>
                                    <td>{element.id}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot></tfoot>
                   </table>
        }
        </>
    )
}
export default Url3;