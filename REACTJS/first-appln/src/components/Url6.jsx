import axios from "axios";
import { useState, useEffect } from "react";
const Url6 = () =>{
    const [recipe, setRecipe] = useState([]);
    const prep_data = async() =>{
        const {data} = await axios.get("`https://dummyjson.com/recipes`");
        const {recipes}  = data;
        setRecipe(recipes);
        console.log(recipes);
    }
    useEffect(()=>{
        prep_data();
    },[]);
    return(
        <>
        <table border={1}
                        align="center"
                        cellPadding={20}
                        cellSpacing={20}>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>ingredients</td>
                    <td>instructions</td>
                    <td>prepTimeMinutes</td>
                    <td>cookTimeMinutes</td>
                    <td>servings</td>
                    <td>difficulty</td>
                    <td>tags</td>
                    <td>userId</td>
                    <td>image</td>
                    <td>rating</td>
                    <td>reviewCount</td>
                    <td>mealType</td>
                   
                </tr>
            </thead>
            <tbody>
                {
                    recipe.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.id}</td>
                               <td>{element.name}</td>
                               <td>
                                <ol>
                                    {
                                        element.ingredients.map((element,index)=>{
                                            return(
                                                <li>{element}</li>
                                            )
                                        })
                                    }
                                </ol>
                               </td>
                               <td>
                                <ol>
                                    {
                                    element.instructions.map((step,index)=>{
                                        return(
                                            <li>{step}</li>
                                        )
                                    })}
                                </ol>
                               </td>
                               <td>{element.prepTimeMinutes}</td>
                               <td>{element.cookTimeMinutes}</td>
                               <td>{element.servings}</td>
                               <td>{element.difficulty}</td>
                               <td>
                                <ol>
                                    {
                                    element.tags.map((step,index)=>{
                                        return(
                                            <li>{step}</li>
                                        )
                                    })}
                                </ol>
                               </td>
                               <td>{
                               element.userId}</td>
                               <td>
                                <img src={element.image} width={100} alt="image" />
                               </td>
                               <td>{element.rating}</td>
                               <td>{element.reviewCount}</td>
                               <td>{element.mealType}</td>
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
export default Url6;