
import {useState} from "react";

export const GroceryInput =({saveData}) => {
    const [text , setText] = useState("");
    const getData =(e) => {
        setText(e.target.value);
    };
    
    return(
        <>
        <input type="text" placeholder="enter grocery" onChange={getData}/>
        <button onClick={()=>saveData(text)}>add grocery</button>
        
        
        </>
    );
};