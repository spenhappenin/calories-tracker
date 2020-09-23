import React, { useContext, } from 'react';

import styled from 'styled-components';
import { Link, } from 'react-router-dom';
import { useHistory, } from "react-router-dom";

import { AuthContext, } from '../providers/AuthProvider';

const Navbar = () => {
  const { authenticated, logout, } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
      <Link to="/">
        <LogoTab name="home">
          {/* <Logo src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAzf6Vt-WUzEecYB8KJptY8ntVIqp17mu4pg&usqp=CAU" /> */}
          Calories Tracker
        </LogoTab>
      </Link>

      <div>
        {
          authenticated ?
            <>
              <Link to="/applications">
                Applications
              </Link>
              <Link to="/companies">
                Companies
              </Link>
              <div onClick={() => logout(history.push)}>
                LOGOUT
              </div>
            </>
          :
            <>
              <Link to="/login">
                Login
              </Link>
              <Link to="/register">
                Register
              </Link>
            </>
        }

      </div>
    </div>
  );
};

const LogoTab = styled.div`
`;

const Logo = styled.img`
  width: 300px;
`;

export default Navbar;
