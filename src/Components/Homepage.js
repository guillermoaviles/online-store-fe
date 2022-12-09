import React from "react";
import axios from "axios";

const Homepage = (props) => {
    const getItems = () => {
        axios.get('localhost:8000/api/online-store/items').then(response => {
            console.log(response.data)
        })
    }
};

export default Homepage;