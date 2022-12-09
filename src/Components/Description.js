import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Description = () => {
    const { id } = useParams
    console.log(id)
    const getItems = () => {
        axios
          .get(`http://localhost:8000/api/online-store/items${id}`)
          .then((response) => {
            console.log(response.data);
          });
      };
      useEffect(() => {
        getItems();
      }, []);
      
    //   if(props.items === undefined) return;
    
};

export default Description;