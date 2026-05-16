const Child3=({msg,arr,bool,obj,list})=>{
    return(
        <>
            <p>{msg}</p>
            {
                arr.map((element,index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
             {
                bool ? <p>hello</p> : <p>Welcome</p>
            }
             <p>{obj.frontend}...{obj.backend}</p>
            <table border={1}
                   align="center"
                   cellPadding={10}
                   cellSpacing={10}>
                <thead>
                    <tr>
                        <th>sid</th>
                        <th>sname</th>
                        <th>sage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((element,index)=>{
                            return(<tr key={index}>
                                <td>{element.sid}</td>
                                <td>{element.sname}</td>
                                <td>{element.sage}</td>
                            </tr>)
                        })
                    }
                </tbody>
                <tfoot></tfoot>

            </table>
        </>
    )
}
export default Child3;