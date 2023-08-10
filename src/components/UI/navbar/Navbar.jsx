import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import MyButton from '../buttons/MyButton';
import {AuthContext} from '../../../context';

const Navbar = () => {
  const {setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };

  return (
    <header className={'navbar'}>
      <div className={'navbar__links'}>
        <MyButton onClick={logout}>Log out</MyButton>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/posts'}>Posts</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
