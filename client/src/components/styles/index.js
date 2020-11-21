import { Button, } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link, } from 'react-router-dom';

export const LinkButton = ({ path, }) => (
  <Link to={path}>
    <Button>

    </Button>
  </Link>
);
