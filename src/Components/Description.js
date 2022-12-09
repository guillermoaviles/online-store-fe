import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Description = (props) => {
    const { _id } = useParams
    console.log(_id)
    const getItems = () => {
        axios
          .get(`http://localhost:8000/api/online-store/items/${_id}`)
          .then((response) => {
            console.log(response.data);
          });
      };
      useEffect(() => {
        getItems();
      }, []);
      
      if(props.items === undefined) return;
    
};

export default Description;