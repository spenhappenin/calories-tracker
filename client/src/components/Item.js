import React, { useContext, useEffect, useState, } from 'react';
import axios from '../utils/webRequests';
import styled from 'styled-components';
import { Button, } from 'semantic-ui-react';
import { Link, useHistory, useParams, } from 'react-router-dom';

import { FlashContext, } from '../providers/FlashProvider';

const Item = () => {
  const { id, } = useParams();
  const { goBack, push, } = useHistory();
  const { setFlash, } = useContext(FlashContext);

  // State
  const [item, setItem] = useState({});

  useEffect(() => {
    axios.get(`/api/items/${id}`)
      .then(({ data }) => {
        setItem(data);
      })
  }, []);

  const handleDelete = () => {
    const confirm = window.confirm('Are you sure you want to delete this item?')
    if (confirm)
      axios.delete(`/api/items/${id}`)
        .then(({ data, }) => {
          setFlash(data, 'green');
          push('/items');
        })
        .catch( ({ errors, }) => {
          setFlash(errors, 'red');
        })
  };

  return (
    <div>
      <ButtonContainer>
        <Button onClick={goBack}>Back</Button>
        <div>
          <Link to={`/items/${item.id}/edit`}>
            <Button color="yellow">Edit</Button>
          </Link>
          <Button onClick={handleDelete} color="red">Delete</Button>
        </div>
      </ButtonContainer>
      <h1>{ item.name }</h1>
      <hr />
      <p>Calories: { item.cals }</p>
    </div>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Item;
