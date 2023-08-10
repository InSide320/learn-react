import React, {useContext} from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/buttons/MyButton';
import {AuthContext} from '../context';

const Login = () => {
  const {setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1>The page for login</h1>
      <form onSubmit={login}>
        <MyInput type={'text'} placeholder={'Input login'} autoComplete={'username'} />
        <MyInput type={'password'} placeholder={'Input password'} autoComplete={'current-password'} />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};

export default Login;
