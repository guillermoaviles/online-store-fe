import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Navigate } from 'react-router-dom'

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
    console.log(editId, 'params ID')
    console.log(updateItem)

    return (
        <div>
            <form>
                <input placeholder="Item name" name="title" value={updateItem.title} onChange={handleUpdateInput} required></input>
                <input placeholder="Description" name="description" value={updateItem.description} onChange={handleUpdateInput}></input>
                <input placeholder="Image" name="images" value={updateItem.images} onChange={handleUpdateInput}></input>
                <input placeholder="Price" name="price" value={updateItem.price} onChange={handleUpdateInput} required></input>
                <button onClick={updateItemCall}>Submit</button>
            </form>
        </div>
    )

};

export default Edit;