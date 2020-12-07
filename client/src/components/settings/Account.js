import React from 'react';
import { Input, Segment, } from 'semantic-ui-react';

const Account = ({ email, }) => {
  return (
    <Segment>
      <h3>Account Settings</h3>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', }}>
        <h5 style={{ margin: '0', width: '30%' }}>Email:</h5>
        <Input
          placeholder="Email"
          value={email}
        />
      </div>
      <br />
    </Segment>
  );
};

export default Account;
