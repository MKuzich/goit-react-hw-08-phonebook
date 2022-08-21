import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const ContactsSection = lazy(() =>
  import('../pages/ContactsSection/ContactsSection')
);
const Error = lazy(() => import('../pages/Error/Error'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<ContactsSection />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
