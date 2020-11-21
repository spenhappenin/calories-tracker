import React, { useEffect, useState, } from 'react';
import axios from '../utils/webRequests';
import { useParams, } from 'react-router-dom';

const Item = () => {
  const [item, setItem] = useState({});
  const { id, } = useParams();

  useEffect(() => {
    axios.get(`/api/items/${id}`)
      .then(({ data }) => {
        setItem(data);
      })
      .catch( err => {
        // TODO: Flash Message
        console.log(err.response);
      })
  }, []);

  return (
    <div>
      <h1>{ item.name }</h1>
      <hr />
      <p>Calories: { item.cals }</p>
    </div>
  );
};

export default Item;
