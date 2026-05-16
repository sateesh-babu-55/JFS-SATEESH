import Child1 from "./Child1.jsx"
const Parent1 = ()=>{
    return(
        <>
        <Child1 key1={"hello"}
        key2={100}
        key3={true}
        key4={[10,20,30,40,50]}
        key5={{"frontend":"reactjs","backend":"nodejs"}}
        key6={[{"sid":111,"sname":"sone","sage":20},
               {"sid":222,"sname":"stwo","sage":30},
               {"sid":333,"sname":"sthree","sage":40},
               {"sid":444,"sname":"sfour","sage":50},
               {"sid":555,"sname":"sfive","sage":60},]}></Child1>
        </>
    )
}
export default Parent1;