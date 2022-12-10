import React, { useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

const Edit = () => {

    const {id} = useParams();
    const [updateItem, setUpdateItem] = useState({
        title: "",
        description: "",
        images: "",
        price: Number
    })

    const updateItemCall = async () => {
        try {
          const change = await axios.put(`https://online-store.herokuapp.com/api/online-store/edit/${id}`, updateItem)
        }
        catch (err) {
          console.log(err)
        }
      }

    const handleUpdateInput = (e) => {
        const itemUpdateInput = {...updateItem};
        itemUpdateInput[e.target.name] = e.target.value;
        setUpdateItem(itemUpdateInput);
    }
    console.log(id, 'params ID')
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