import {BrowserRouter, Routes,Route,Link} from "react-router-dom"

import Mobiles from "./Mobiles.jsx"
import Laptops from "./Laptops.jsx"
import Dell from "./Dell.jsx"
import Hp from "./Hp.jsx"
import Samsung from "./Samsung.jsx"
import Infinix from "./Infinix.jsx"
const Master1 = () =>{
    return(
        <>
        <BrowserRouter>
            <Link to={"/laptops/111/lap1/10000"} style={{marginRight:200}}>Laptops</Link>
            <Link to={"/mobiles"} style={{marginRight:200}}>Mobiles</Link>
            
            <Routes>
                <Route path="/laptops/:pid/:pname/:pcost" element={<Laptops></Laptops>}>
                    <Route path="laptops/dell" element={<Dell></Dell>}></Route>
                    <Route path="laptops/hp" element={<Hp></Hp>}></Route>
                
                </Route>
                <Route path="/mobiles" element={<Mobiles></Mobiles>}>
                    <Route path="mobiles/samsung" element={<Samsung></Samsung>}></Route>
                    <Route path="mobiles/infinix" element={<Infinix></Infinix>}></Route>
                
                </Route>
              
            </Routes>

        </BrowserRouter>
        </>
    )
}
export default Master1;