import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const AddComment = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const addNewComment = (e) => {
    e.preventDefault();
    axios.post(
      `https://online-store.herokuapp.com/api/online-store/newComment/${params.id}`
    );
    navigate(`/description/${params.id}`);
  };

  return (
    <div>
      <form onSubmit={addNewComment}>
        Name:
        <input></input>
        Review:
        <input></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddComment;
