import React, { useState} from "react";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate()
    const[newItem, setNewItem] = useState({
        title:"",
        description: "",
        images: "",
        price: Number
    });

    const createNewItem = async (e) => {
        e.preventDefault()
        try{
            const newlyCreatedItem = await axios.post('https://online-store.herokuapp.com/api/online-store/newItem', newItem)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }

    const handleCreate = (e) => {
        e.preventDefault()
        const newItemInput = {...newItem};
        newItemInput[e.target.name] = e.target.value;
        setNewItem(newItemInput);
    }
    console.log(newItem)
    return(
        <div>
            <form>
                <input placeholder="Item name" name="title" value={newItem.title} onChange={handleCreate} required></input>
                <input placeholder="Description" name="description" value={newItem.description} onChange={handleCreate}></input>
                <input placeholder="Image" name="images" value={newItem.images} onChange={handleCreate}></input>
                <input placeholder="Price" name="price" value={newItem.price} onChange={handleCreate} required></input>
                <button onClick={createNewItem}>Submit</button>
            </form>
        </div>
    )
    
};

export default Create;
