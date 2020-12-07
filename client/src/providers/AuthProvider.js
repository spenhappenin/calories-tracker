import React, { useContext, useState, } from 'react';
import axios from "../utils/webRequests";
import { FlashContext, } from './FlashProvider';

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children, }) => {
  // const { setFlash, } = useContext(FlashContext);

  // State
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const registration = (user, push) => {
    axios.post('/api/registration', { ...user })
      .then( ({ data, }) => {
        setUser(data);
        authenticate(user, push);
        push('/');
      })
      .catch( ({ messages, }) => {
        // setFlash(messages, 'red');
      })
  };

  const authenticate = ({ email, password, }, push) => {
    setLoading(true);
    axios.post('/api/authenticate', { email, password, })
      .then( res => {
        setLoading(false);
        setUser(res.data);
        setAuthenticated(true);
        push('/');
      })
      .catch( err => {
        debugger
        // setFlash('', 'red');
        setLoading(false);
        setAuthenticated(false);
        setUser(null);
      })
  };

  const logout = (push) => {
    setLoading(true);
    setUser(null);
    setAuthenticated(false);
    window.localStorage.removeItem('userToken');
    push('/login');
  };

  const validateToken = () => {
    setLoading(true);
    return new Promise( (resolve, reject) => {
      axios.post("/api/validate_token")
        .then( res => {
          setLoading(false);
          setAuthenticated(true);
          setUser(res.data);
          resolve(res);
        })
        .catch( err => {
          setLoading(false);
          setAuthenticated(false);
          setUser(null);
          reject(err);
        })
    });
  };

  return (
    <AuthContext.Provider value={{
      user,
      authenticated,
      loading,
      registration,
      authenticate,
      logout,
      validateToken,
    }}>
      { children }
    </AuthContext.Provider>
  );
};
