import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddComment = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    user: "",
    body: "",
    item: params.id
  });

  const addNewComment = (e) => {
    e.preventDefault();
    axios.post(
      `https://online-store.herokuapp.com/api/online-store/newComment/${params.id}`
    );
    navigate(`/description/${params.id}`);
  };

  const handleComment = (e) => {
    setInput ({...input, [e.target.name]: e.target.value})
  };

  return (
    <div>
      <form onSubmit={addNewComment}>
        Name:
        <input onChange={handleComment} type="text" name="user"></input>
        Review:
        <input onChange={handleComment} type="text" name="body"></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
