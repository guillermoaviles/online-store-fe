import React, { useState} from "react";
import axios from 'axios'

const Create = () => {
    const[newItem, setNewItem] = useState({
        title:"",
        description: "",
        images: "",
        price: ""
    })

    return(
        <form>
            <input placeholder="Item name" name="title"></input>
            <input placeholder="Description" name="description"></input>
            <input placeholder="Image" name="images"></input>
            <input placeholder="Price" name="price"></input>
            <button>Submit</button>
        </form>
    )
    
};

export default Create;
