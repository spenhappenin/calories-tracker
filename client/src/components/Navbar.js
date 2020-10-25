import React, { useContext, } from 'react';

import { Link, } from 'react-router-dom';
import { useHistory, } from "react-router-dom";
import { Menu, } from 'semantic-ui-react';

import { AuthContext, } from '../providers/AuthProvider';

const Navbar = () => {
  const { authenticated, logout, } = useContext(AuthContext);
  const history = useHistory();

  return (
    <Menu>
      <Link to="/">
        <Menu.Item>
          Calories Tracker
        </Menu.Item>
      </Link>

      <Menu.Menu position="right">
        {
          authenticated ?
            <>
              <Menu.Item name="logout" onClick={() => logout(history.push)}>
                LOGOUT
              </Menu.Item>
            </>
          :
            <>
              <Link to="/login">
                <Menu.Item name="login">
                  Login
                </Menu.Item>
              </Link>
              <Link to="/register">
                <Menu.Item name="register">
                  Register
                </Menu.Item>
              </Link>
            </>
        }

      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
