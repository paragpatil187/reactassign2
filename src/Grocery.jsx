import { useState } from "react";
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import {nanoid} from "nanoid"
export const Grocery = () => {
    const [list , setList] =useState([]);

    const saveData =(data) => {
        const payload ={
            title:data,
            
            id:nanoid(7)

        }
        setList([...list, payload]);

    }
    const handleDelete =(id) => {
        let updatedlist = list.filter((e)=> e.id !==id)
        setList(updatedlist)

    }
    return(
        <>
        <GroceryInput saveData={saveData} />
        {list.map((e,i)=> (
            <GroceryList {...e} key={e.id}  handleDelete={handleDelete} i={i} />
        ))}
        
        </>
    );
};