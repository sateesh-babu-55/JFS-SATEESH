import axios from "axios"
import { useState, useEffect } from "react"

const Url2 = () =>{
    const [users,setUsers] = useState([]);
    const get_data = async()=>{
            const {data} =await axios.get("https://jsonplaceholder.typicode.com/posts");
            setUsers(data);
            console.log(data);
    }
    useEffect(()=>{
        get_data(); 
    },[]);
    return(
        <>
       { 
        <table border={1}
                align="center"
                cellPadding={20}
                cellSpacing={20}>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
            </thead>
            <tbody>
           { users.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{element.userId}</td>
                        <td>{element.id}</td>
                        <td>{element.title}</td>
                        <td>{element.body}</td>
                    </tr>
                )
            })}
            </tbody>
            <tfoot></tfoot>
        </table>
        
        }
        </>
    )

}
export default Url2;