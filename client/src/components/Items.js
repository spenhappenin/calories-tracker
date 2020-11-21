import React, { useEffect, useState, } from 'react';
import axios from '../utils/webRequests';
import { Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
      .then( ({ data, }) => {
        setItems(data);
      })
      .catch( ({ response, }) => {
        // TODO: Error Handle
        console.log(response);
      })
  }, []);

  return (
    <div>
      <h1>Items</h1>
      <Link to="/items/new">
        <Button>New Item</Button>
      </Link>
      <br />
      <br />
      { items.map( item => (
        <Link key={item.id} to={`/items/${item.id}`}>
          <h3>{ item.name }</h3>
        </Link>
      ))}
    </div>
  );
};



export default Items;
