import {Link, Outlet, useParams} from "react-router-dom"
const Laptops = () =>{
    const {pid,pname,pcost} = useParams();
    return(
        <>
        <h1>{pid}...{pname}...{pcost}</h1>
        <br /> 
        <Link to="laptops/dell" style={{marginRight:200}}>DELL</Link>
        <Link to="laptops/hp" style={{marginRight:200}}>HP</Link>
        <br />
        <Outlet></Outlet>
        </>
    )
}
export default Laptops;