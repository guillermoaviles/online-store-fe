import React, { useState} from "react";
import axios from 'axios'

const Create = () => {
    const[newItem, setNewItem] = useState({
        title:"",
        description: "",
        images: "",
        price: ""
    });

    const createNewItem = async () => {
        try{
            const newlyCreatedItem = await axios.post('http://localhost:8080/api/online-store/newItem', newItem)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleCreate = (e) => {
        const newItemInput = {...newItem};
        newItemInput[e.target.name] = e.target.value;
        setNewItem(newItemInput);
    }

    return(
        <div>
            <form>
                <input placeholder="Item name" name="title" value={newItem.title} onChange={handleCreate}></input>
                <input placeholder="Description" name="description" value={newItem.description} onChange={handleCreate}></input>
                <input placeholder="Image" name="images" value={newItem.images} onChange={handleCreate}></input>
                <input placeholder="Price" name="price" value={newItem.price} onChange={handleCreate}></input>
                <button onClick={createNewItem}>Submit</button>
            </form>
        </div>
    )
    
};

export default Create;
