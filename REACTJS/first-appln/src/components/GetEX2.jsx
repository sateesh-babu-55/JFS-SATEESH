import axios from "axios";
import { useEffect, useState } from "react";
const GetEx2 = ()=>{
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [num3,setNum3] = useState();
    const [num4,setNum4] = useState();
    const [users,setUsers] = useState([]);
    const make_api_call = async ()=>{
        const {data} = await axios.get("https://reqres.in/api/users?page=1",{
            headers:{
                "Content-Type": "application/json",
                "x-api-key": "free_user_3DlstEUvXOnCNcY97i92ylgeOU8"
            }
        });
        
        const {page,per_page,total,total_pages,data:result} = data;
        setNum1(page);
        setNum2(per_page);
        setNum3(total_pages);
        setNum4(total);
        setUsers(result);
    }
    useEffect(()=>{
        make_api_call();
    },[]);
    
    return(
        <>
                <h1>{num1}</h1>
                <h1>{num2}</h1>
                <h1>{num3}</h1>
                <h1>{num4}</h1>
                <table border={1}
                      align="center"
                      cellPadding={20}
                      cellSpacing={20}>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>avatar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((element,index)=>{
                                return(<tr key={index}>
                                    <td>{element.id}</td>
                                    <td>{element.email}</td>
                                    <td>{element.first_name}</td>
                                    <td>{element.last_name}</td>
                                    <img src={element.avatar} width={50}></img>
                                </tr>)
                            })
                        }
                    </tbody>
                    <tfoot></tfoot>
                </table>
        </>
    )
}
export default GetEx2;