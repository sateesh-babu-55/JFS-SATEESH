import axios from "axios";
import { useEffect,useState } from "react";
const GetEx1 = ()=>{
    const [num1,setNum1] = useState();
    const [num2,setNum2] = useState();
    const [num3,setNum3] = useState();
    const [emps,setEmps] = useState([]);
    const read_users = async ()=>{
        const {data} = await axios.get("https://dummyjson.com/users");
        const {limit,skip,total,users} = data;
        setNum1(limit);
        setNum2(skip);
        setNum3(total);
        setEmps(users);
        console.log(users);
    }

    useEffect(()=>{
        read_users();
    },[]);
    
    return(
        <>
            <p>{num1}</p>
            <p>{num2}</p>
            <p>{num3}</p>
            <table border={1} align="center" cellPadding={20} cellSpacing={20}>
                <thead>
                    <tr>
                        <th>age</th>
                        <th>birthDate</th>
                        <th>bloodGroup</th>
                        <th>ein</th>
                        <th>email</th>
                        <th>eyeColor</th>
                        <th>firstName</th>
                        <th>gender</th>
                        <th>height</th>
                        <th>id</th>
                        <th>image</th>
                        <th>ip</th>
                        <th>lastName</th>
                        <th>macAddress</th>
                        <th>maidenName</th>
                        <th>password</th>
                        <th>phone</th>
                        <th>role</th>
                        <th>ssn</th>
                        <th>university</th>
                        <th>userAgent</th>
                        <th>username</th>
                        <th>weight</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emps.map((element,index)=>{
                            const {address:obj1} = element;
                            const {address,city,country,postalCode,state,stateCode,coordinates} = obj1;
                            const {lat,lng} = coordinates;
                            const addr = address +" "+city +" "+country +" "+postalCode+" "+state+" "+stateCode+" "+lat+" "+lng
                            return(<tr key={index}>
                                <td>{element.age}</td>
                                <td>{element.birthDate}</td>
                                <td>{element.bloodGroup}</td>
                                <td>{element.ein}</td>
                                <td>{element.email}</td>
                                <td>{element.eyeColor}</td>
                                <td>{element.firstName}</td>
                                <td>{element.gender}</td>
                                <td>{element.height}</td>
                                <td>{element.id}</td>
                                <td>
                                    <img src={element.image} width={50} alt="Emp"></img>
                                </td>
                                <td>{element.ip}</td>
                                <td>{element.lastName}</td>
                                <td>{element.macAddress}</td>
                                <td>{element.maidenName}</td>
                                <td>{element.password}</td>
                                <td>{element.phone}</td>
                                <td>{element.role}</td>
                                <td>{element.ssn}</td>
                                <td>{element.university}</td>
                                <td>{element.userAgent}</td>
                                <td>{element.username}</td>
                                <td>{element.weight}</td>
                                <td>{addr}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </>
    )
}
export default GetEx1;