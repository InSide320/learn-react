import React, {useEffect, useMemo, useState} from 'react';
import './assets/styles/App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/UI/navbar/Navbar';
import AppRouter from './components/AppRouter';
import {AuthContext} from './context';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const authObject = useMemo(() => ({isAuth, setIsAuth, isLoading}), [isAuth, isLoading]);

  useEffect(() => {
    if (localStorage.getItem('auth') === 'true') {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={authObject}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
        {/*<footer></footer>*/}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
