import React, { useContext, } from 'react';
import Account from './Account';
import Profile from './Profile';
import { AuthContext, } from '../../providers/AuthProvider';

const Settings = () => {
  const { user, } = useContext(AuthContext);

  return (
    <div>
      <Account {...user} />
      <Profile {...user} />
    </div>
  );
};

export default Settings;
