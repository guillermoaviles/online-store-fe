import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const AddComment = () => {
  const { commentId } = useParams();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState({
    user: "",
    body: "",
    item: commentId
  });

  const addNewComment = async (e) => {
    try {
      e.preventDefault()
      const newlyCreatedCmt = await axios.post(`https://online-store.herokuapp.com/api/online-store/newComment/${commentId}`, newComment)
      navigate(`/description/${commentId}`)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleComment = (e) => {
    const newCommentInput = { ...newComment }
    newCommentInput[e.target.name] = e.target.value
    setNewComment(newCommentInput)
  };

  return (
    <div className='action-page'>
      <h1>Add Review</h1>
      <form className='item-box' onSubmit={addNewComment}>
        <input className='input' placeholder="Name" onChange={handleComment} name="user" value={newComment.user}></input>
        <input className='input' placeholder="Review" onChange={handleComment} name="body" value={newComment.body} required></input>
        <button className='item-button'>Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
