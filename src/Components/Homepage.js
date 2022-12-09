import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Homepage = (props) => {
  const getItems = () => {
    axios
      .get("https://online-store.herokuapp.com/api/online-store/items")
      .then((response) => {
        props.setItems(response.data);
      });
  };
  useEffect(() => {
    getItems();
  }, []);

  if (props.items === undefined) return;

  let newData = Object.values(props.items);

  const data = newData.map((items, key) => {
    return (
      <div key={key}>
        <Link to={`description/${items._id}`}>
          <img src={items.images} alt={items.name} />
        </Link>
        <p>{items.title}</p>
        <p className="Price">{items.price}</p>
      </div>
    );
  });
  return <div>{data}</div>;
};

export default Homepage;
