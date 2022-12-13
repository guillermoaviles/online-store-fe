import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import FileBase64 from 'react-file-base64'


const Create = () => {
    const navigate = useNavigate()
    const [newItem, setNewItem] = useState({
        title: "",
        description: "",
        images: "",
        price: Number
    });

    const createNewItem = async (e) => {
        e.preventDefault()
        try {// eslint-disable-next-line no-unused-vars
            const newlyCreatedItem = await axios.post('https://online-store.herokuapp.com/api/online-store/newItem', newItem)
            navigate('/')
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleCreate = (e) => {
        e.preventDefault()
        const newItemInput = { ...newItem };
        newItemInput[e.target.name] = e.target.value;
        setNewItem(newItemInput);
    }
    console.log(newItem)
    return (
        <div className='action-page'>
            <h1>Sell Item</h1>
            <form className='item-box' onSubmit={createNewItem}>
                <input className='input' placeholder="Item name" name="title" value={newItem.title} onChange={handleCreate} required />
                <input className='input' placeholder="Description" name="description" value={newItem.description} onChange={handleCreate} required />
                <FileBase64 multiple={false} onDone={({ base64 }) => setNewItem({ ...newItem, images: base64 })} />
                <input className='input' placeholder="Price" name="price" value={newItem.price} onChange={handleCreate} type='number' required />
                <button className='item-button'>Submit</button>
            </form>
        </div>
    )

};

export default Create;
