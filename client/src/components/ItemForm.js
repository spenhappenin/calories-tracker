import React, { useState, } from 'react';
import axios from '../utils/webRequests';
import { Form, } from 'semantic-ui-react';
import { useHistory, } from 'react-router-dom';

const ItemForm = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [cals, setCals] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/items', { name, cals, })
      .then( () => {
        // TODO: flash message
        history.push('/items');
      })
      .catch( err => {
        // TODO: Error handling
        console.log(err);
      })
  };

  return (
    <>
      <h1>New Item</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            label="Name"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Form.Input
            type="number"
            label="Calories"
            placeholder="Calories"
            required
            value={cals}
            onChange={e => setCals(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </>
  );
};

export default ItemForm;
