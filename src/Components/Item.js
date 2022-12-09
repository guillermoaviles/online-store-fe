import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const { id } = useParams();
  const getItems = () => {
    axios
      .get(`http://localhost:8000/api/online-store/items/${id}`)
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
  </div>
  )
};

export default Item;
