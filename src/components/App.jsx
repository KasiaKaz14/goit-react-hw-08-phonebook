import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/actions';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { RegisterPage } from 'pages/RegisterPage';
import { LoginPage } from 'pages/LoginPage';
import { ContactPage } from '../pages/ContactPage';
import { Layout } from 'Layout/Layout';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectLoggedIn);

  useEffect(() => {
    if (isLogged) {
      dispatch(refreshUser());
    }
  }, [isLogged, dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              !isLogged ? <RegisterPage /> : <Navigate replace to={'/'} />
            }
          />
          <Route
            path="/login"
            element={!isLogged ? <LoginPage /> : <Navigate replace to={'/'} />}
          />
          <Route
            path="/contacts"
            element={isLogged ? <ContactPage /> : <Navigate replace to={'/'} />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
