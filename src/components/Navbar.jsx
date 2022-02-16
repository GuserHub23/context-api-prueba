import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';

const Navbar = () => {

  const { user, login, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark mb-4">
      <div className="container">
        <span className="navbar-brand">
          <h2>
            {
              user ? `Welcome ${user.name}` : 'Welcome'
            } 
          </h2>
        </span>

        {
          user ?
            <button
              onClick={logout}
              className="btn btn-danger"
            >
              Log Out
            </button>
          :
            <button
              onClick={login}
              className="btn btn-primary"
            >
              Log In
            </button>
        }

      </div>
    </nav>
  );
}

export default Navbar;
