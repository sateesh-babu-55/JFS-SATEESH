const Child1 = (props) =>{
    return(
        <>
        <p>{props.key1}</p>
        <p>{props.key2}</p>
        {
            props.key3 ? <p>{props.key1}</p>: <p>{props.key2}</p>

        }
        {
          !props.key3 ? <p>{props.key1}</p>: <p>{props.key2}</p>  
        }
        {
            props.key4.map((element,index)=>{
                return(<p key={index}>{element}</p>)
            })
        }
        {
            <p>{props.key5.frontend}....{props.key5.backend}</p>
        }
        

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
                    props.key6.map((element,index)=>{
                        return (
                            <tr key={index}>
                                <td>{element.sid}</td>
                                <td>{element.sname}</td>
                                <td>{element.sage}</td>
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
export default Child1;