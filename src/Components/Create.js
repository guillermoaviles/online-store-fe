import React, { useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


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
        try{/*eslint-disable no-unused-vars*/
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
        <div className='action-page'>
            <h1>Sell Item</h1>
            <form className='item-box' onSubmit={createNewItem}>
                <input className='input' placeholder="Item name" name="title" value={newItem.title} onChange={handleCreate} required />
                <input className='input' placeholder="Description" name="description" value={newItem.description} onChange={handleCreate} required></input>
                <input className='input' placeholder="Image" name="images" value={newItem.images} onChange={handleCreate} required></input>
                <input className='input' placeholder="Price" name="price" value={newItem.price} onChange={handleCreate} type='number' required></input>
                <button className='item-button'>Submit</button>
            </form>
        </div>
    )
    
};

export default Create;
