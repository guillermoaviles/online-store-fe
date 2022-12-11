import axios from "axios";
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import EditItemButton from './EditItemButton'

const Description = (props) => {
  const navigate = useNavigate();
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
        props.setComments(response.data);
      });
  };

  useEffect(() => {
    getItems();
    getComments();
  }, []);
  
  if (props.items === undefined) return;
  
  if (props.comments === undefined) return;
  
  const newComments = props.comments.map((someComment, key) => {
    return (
      <div key={key}>
        <p>{someComment.user}</p>
        <p>{someComment.body}</p>
        <button onClick={() => deleteComment(someComment._id)}>
          Delete Comment
        </button>
      </div>
    );
  });
  
  const deleteItem = (itemId) => {
    axios
      .delete(
        `https://online-store.herokuapp.com/api/online-store/deleteItem/${itemId}`
      )
      .then((response) => {
        props.setItems(response.data);
        navigate('/')
      });
  };
  const deleteComment = (commentId) => {
    axios
      .delete(
        `https://online-store.herokuapp.com/api/online-store/deleteComment/${commentId}`
      )
      .then((response) => {
        window.location.reload()
      });
  };
  
  return (
    <div>
      <Link to={`/description/edit/${props.items._id}`}><EditItemButton/></Link>
      <h1>{props.items.title}</h1>
      <img src={props.items.images} alt={props.items.title}/>
      <p>{props.items.price}</p>
      <p>{props.items.description}</p>
      <button onClick={() => deleteItem(props.items._id)}>Buy</button>
      <h2>Reviews</h2>
      <Link to={`/addComment/${props.items._id}`}><button>Add Review</button></Link>
      {newComments}
    </div>
  );
};

export default Description;
