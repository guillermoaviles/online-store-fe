import React, { useEffect } from "react";
import axios from "axios";

const Homepage = (props) => {
    const getItems = () => {
        axios.get('http://localhost:8000/api/online-store/items').then(response => {
            console.log(response.data)
        })
    }
    useEffect(() => {
        getItems()
    }, [])

    
};

export default Homepage;