import React, { useContext, } from 'react';

import { Link, } from 'react-router-dom';
import { useHistory, } from "react-router-dom";
import { Dropdown, Icon, Menu, } from 'semantic-ui-react';

import { AuthContext, } from '../providers/AuthProvider';

const Navbar = () => {
  const { authenticated, logout, user, } = useContext(AuthContext);
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
              <Link to="/items">
                <Menu.Item>
                  Items
                </Menu.Item>
              </Link>
              <Dropdown text={user && `${user.first_name} ${user.last_name}`} simple item>
                <Dropdown.Menu>
                  <Link to="/settings">
                    <Dropdown.Item>Settings</Dropdown.Item>
                  </Link>
                  <Dropdown.Item onClick={() => logout(history.push)}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
