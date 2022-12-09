import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  const getItems = () => {
    axios
      .get("http://localhost:8000/api/online-store/items")
      .then((response) => {
        props.setItems(response.data);
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  if (props.items === undefined) return;

  const newData = props.items.map((items, key) => {
    return (
      <div key={key}>
        <Link to={`description/${items.id}`}>
        <img src={items.images} alt={items.name} />
        </Link>
        <p className="Price">{items.price}</p>
      </div>
    );
  });

  return <div>{newData}</div>;
};

export default Homepage;
