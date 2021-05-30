import React, { useState, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase';

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, path }) => {
  const [localUser, setLocalUser] = useState(0);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setLocalUser(1);
    } else {
      setLocalUser(2);
    }
  });
  switch (localUser) {
    case 1:
      return <Route path={path}>{children}</Route>;
    case 2:
      return <Redirect to='/' />;
    default:
      return <div>Loading...</div>;
  }
};

export default ProtectedRoute;

interface ProtectedRouteProps {
  children: ReactNode;
  path: string;
}
