import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Description = (props) => {
  const [comments, setComments] = useState();
  const { id } = useParams();
  const getItems = () => {
    axios
      .get(`https://online-store.herokuapp.com/api/online-store/items/${id}`)
      .then((response) => {
        props.setItems(response.data);
      });
  };

  const getComments = () => {
    axios
      .get(`https://online-store.herokuapp.com/api/online-store/comments/${id}`)
      .then((response) => {
        setComments(response.data);
      });
  };

  useEffect(() => {
    getItems();
    getComments();
  }, []);

  if (props.items === undefined) return;

  if (comments === undefined) return;

  const newComments = comments.map((someComment, key) => {
    return (
      <p key={key}>{someComment.body}</p>
    );
  });

  return (
    <div>
      <h1>{props.items.title}</h1>
      <img src={props.items.images} />
      <p>{props.items.price}</p>
      <p>{props.items.description}</p>
      <button>Buy</button>
      <h2>Reviews</h2>
      {newComments}
    </div>
  );
};

export default Description;
