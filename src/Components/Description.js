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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  if (props.items === undefined) return;
  
  if (props.comments === undefined) return;
  
  const newComments = props.comments.map((someComment, key) => {
    return (
      <div className='comment-box' key={key}>
        <p>User: {someComment.user}</p>
        <p>Review: {someComment.body}</p>
        <button className='delete-comment-button' onClick={() => deleteComment(someComment._id)}>
          Delete Review
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
    <div className='description-page'>
      <h1 className='product-title'>{props.items.title}</h1>
      <div className='product-box'>
        <div className='image-box'>
          <img className='description-image' src={props.items.images} alt={props.items.title}/>
        </div>
        <div className='description-box'>
          <div className='item-description-box'>
            <h2>Item Description</h2>
            <p className='item-description'>{props.items.description}</p>
            <p className='item-price'>${props.items.price}</p>
            <div>
              <button className='buy-button' onClick={() => deleteItem(props.items._id)}>Buy</button>
              <Link to={`/description/edit/${props.items._id}`}><EditItemButton/></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='reviews-box'>
        <h2>Reviews</h2>
        <Link to={`/addComment/${props.items._id}`}><button className='review-button'>Add Review</button></Link>
        {newComments}
      </div>
    </div>
  );
};

export default Description;
