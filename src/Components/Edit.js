import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import FileBase64 from 'react-file-base64'

const Edit = () => {
    const navigate = useNavigate()
    const {editId} = useParams();
    const [updateItem, setUpdateItem] = useState({
        title: "",
        description: "",
        images: "",
        price: Number
    })

    const updateItemCall = async (e) => {
        e.preventDefault()
        try {
          const change = await axios.put(`https://online-store.herokuapp.com/api/online-store/edit/${editId}`, updateItem)
            navigate(`/description/${editId}`)
        }
        catch (err) {
          console.log(err)
        }
      } 


    const handleUpdateInput = (e) => {
        e.preventDefault()
        const itemUpdateInput = {...updateItem};
        itemUpdateInput[e.target.name] = e.target.value;
        setUpdateItem(itemUpdateInput);
    }

    return (
        <div className='action-page'>
            <h1>Edit Item</h1>
            <form className='item-box'>
                <input className='input' placeholder="Item name" name="title" value={updateItem.title} onChange={handleUpdateInput} required></input>
                <input className='input' placeholder="Description" name="description" value={updateItem.description} onChange={handleUpdateInput}></input>
                <FileBase64 multiple={false} onDone={({ base64 }) => setUpdateItem({ ...updateItem, images: base64 })} />
                <input className='input' placeholder="Price" name="price" value={updateItem.price} onChange={handleUpdateInput} required></input>
                <button className='item-button' onClick={updateItemCall}>Submit</button>
            </form>
        </div>
    )

};

export default Edit;