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
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (props.items === undefined) return;

  let newData = Object.values(props.items);

  const data = newData.map((items, key) => {
    return (
      <div key={key} className='item'>
        <Link to={`description/${items._id}`}>
          <img src={items.images} alt={items.name} className='gallery-image'/>
        
        <div className='item-info'>
            <p className='item-title'>{items.title}</p>
            <p className='price'>${items.price}</p>
        </div>
        </Link>
      </div>
    );
  });
  return  <div>
            <h1 className='items'>Available Items({data.length})</h1>
            <div className='gallery-container'>{data}</div>
          </div>
  
};

export default Homepage;
