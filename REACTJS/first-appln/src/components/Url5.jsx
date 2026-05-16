import axios from "axios";
import { useState, useEffect } from "react";
const Url5 = () => {
        const [product, setProduct] = useState([]);
        const product_data = async()=>{
            const {data} = await axios.get("https://dummyjson.com/products");
            const {products} = data;
            setProduct(products);
            console.log(products);
        }
        useEffect(()=>{
            product_data();
        },[]);
        return(
            <>
            {
                <table border={1}
                        align="center"
                        cellPadding={20}
                        cellSpacing={20}>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>title</td>
                            <td>description</td>
                            <td>category</td>
                            <td>price</td>
                            <td>discountPercentage</td>
                            <td>rating</td>
                            <td>stock</td>
                            <td>tags</td>
                            <td>brand</td>
                            <td>sku</td>
                            <td>weight</td>
                            <td>dimensions</td>
                            <td>warrantyInformation</td>
                            <td>shippingInformation</td>
                            <td>availabilityStatus</td>
                            <td>meta_data</td>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                        product.map((element,index) =>{
                            const {dimensions:obj1} = element;
                            const {width,height,depth} = obj1;
                            const dim = `${width}
                                        ${height}
                                        ${depth}`;
                            const {meta:obj2} = element;
                            const {createdAt,updatedAt,barcode,qrCode} = obj2;
                            const meta_data = `${createdAt} ${updatedAt} ${barcode}`;
                            return(<tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.title}</td>
                                <td>{element.description}</td>
                                <td>{element.category}</td>
                                <td>{element.price}</td>
                                <td>{element.discountPercentage}</td>
                                <td>{element.rating}</td>
                                <td>{element.stock}</td>
                                <td>{element.tags}</td>
                                <td>{element.brand}</td>
                                <td>{element.sku}</td>
                                <td>{element.weight}</td>
                                <td>{dim}</td>
                                <td>{element.warrantyInformation}</td>
                                <td>{element.shippingInformation}</td>
                                <td>{element.availabilityStatus}</td>
                               
                                <td>{meta_data}</td>
                               
                            </tr>)
                        })
                    }
                    </tbody>
                    <tfoot></tfoot>
                        </table>
            }
            </>
        )
}
export default Url5;