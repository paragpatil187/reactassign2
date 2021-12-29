export const GroceryList =({title,id,handleDelete,i})=> {
    return(
        <>
        <h2>{i+1}. {title} <button onClick={() => handleDelete(id)} >Delete</button></h2>
        </>
        
    )
}