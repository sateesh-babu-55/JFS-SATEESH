import axios from "axios"
import { useState, useEffect } from "react"

const Url1 =() =>{
    const [users, setUsers] = useState([]);
    const read_data = async ()=>{
        const  {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(data);
        console.log(data);
    
    }
    useEffect(()=>{
        read_data();
    },[]);
    return(
        <>
        <table border={1} align="center" cellPadding={20} cellSpacing={20}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>username</td>
                    <td>email</td>
                    <td>address</td>
                    <td>phone</td>
                    <td>website</td>
                    <td>Company</td>
                  
                </tr>
            </thead>
            <tbody>
                {
                    users.map((element,index)=>{
                        const {address:obj1} = element;
                        const {street,suite,city,zipcode,geo} = obj1;
                        const {lat,lag} = geo;
                        const addr =`${street}
                                     ${suite}
                                     ${city}
                                     ${zipcode}
                                     ${geo}`;

                        const {company} = element;
                        const {name,catchPhrase,bs} = company;
                        const comp = `${name}
                                        ${catchPhrase}
                                        ${bs}`;             
                        return(<tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.username}</td>
                            <td>{element.email}</td>
                            <td>{addr}</td>
                            <td>{element.phone}</td>
                            <td>{element.website}</td>
                            <td>{comp}</td>
                            

                        </tr>)
                    })
                }
            </tbody>
            <tfoot></tfoot>
        </table>
        
        </>
    )

}
export default Url1;