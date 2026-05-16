import axios from "axios";
import { useState, useEffect } from "react";
const Url4 = () =>{
    const [todos, setTodos] = useState([]);
    const receive_data = async()=>{
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(data);
        console.log(data);
    }
    useEffect(()=>{
        receive_data();
    },[]);
    return(
        <>
        <table border={1}
                align="center"
                cellPadding={10}
                cellSpacing={10}>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.userId}</td>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td>{element.completed.toString()}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            <tfoot></tfoot>
                </table>
        </>
    )


}
export default Url4;