const Child2=(props)=>{
    return(
        <>
            <p>{props.msg}</p>
            {
                props.bool ? <p>hello</p> : <p>Welcome</p>
            }
            {
                props.num.map((element,index)=>{
                    return(<p key={index}>{element}</p>)
                })
            }
            <p>{props.obj.frontend}...{props.obj.backend}</p>
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
                        props.list.map((element,index)=>{
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
export default Child2;