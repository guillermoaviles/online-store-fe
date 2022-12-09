import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Description = (props) => {
  const { id } = useParams();
  const getItems = () => {
    axios
      .get(`http://localhost:8080/api/online-store/items/${id}`)
      .then((response) => {
        props.setItems(response.data);
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  if(props.items === undefined) return;

  return(
  <div>
    <h1>{props.items.title}</h1>
    <img src={props.items.images}/>
    <p>{props.items.price}</p>
    <p>{props.items.description}</p>
    <button>Buy</button>
    <h2>Comments</h2>
    <p>comments.....</p>
  </div>
  )
};

export default Description;
