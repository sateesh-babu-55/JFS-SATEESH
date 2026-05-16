import { useState } from "react";
const StateEx3 = () =>{

const [stds,setStds] = useState([
      {"sid":111,"sname":"Sone","std":"X"},
      {"sid":222,"sname":"Stwo ","std":"IX"},
      {"sid":333,"sname":"SThree","std":"XII"},
      {"sid":444,"sname":"SFour","std":"XII"},
      {"sid":555,"sname":"SFive","std":"X"},
      {"sid":666,"sname":"SSix","std":"VI"},
      {"sid":777,"sname":"Sseven","std":"VII"},
      {"sid":888,"sname":"Seight","std":"VII"},
      {"sid":999,"sname":"Snine","std":"V"},
      {"sid":1000,"sname":"Sten","std":"X"}
]);

return(
    <> 
    <table
        border={1}
        align="center"
        cellPadding={10}
        cellSpacing={10}>
            <thead>
                <tr>
                    <th>sid</th>
                    <th>sname</th>
                    <th>std</th>
                </tr>
            </thead>
            <tbody>
              {stds.map((element,index)=>(
                <tr key={index}>
                    <td>{element.sid}</td>
                    <td>{element.sname}</td>
                    <td>{element.std}</td>
                </tr>
                
              ))}  
            </tbody>

    </table>
    </>
)

}
export default StateEx3;