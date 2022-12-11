import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddComment = () => {
  const {commentId} = useParams();
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
  catch(err){
    console.log(err)
  }
}

  // const addNewComment = (e) => {
  //   e.preventDefault();
  //   axios.post(
  //     `https://online-store.herokuapp.com/api/online-store/newComment/${commentId}`
  //   );
  //   navigate(`/description/${commentId}`);
  // };

  const handleComment = (e) => {
    const newCommentInput = {...newComment}
    newCommentInput[e.target.name] = e.target.value
    setNewComment(newCommentInput)
  };

  console.log(newComment)
  console.log(commentId)

  return (
    <div>
      <form onSubmit={addNewComment}>
        <input placeholder="Name" onChange={handleComment} name="user" value={newComment.user}></input>
        <input placeholder="Review" onChange={handleComment} name="body" value={newComment.body}></input>
        <button onClick={addNewComment}>Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
