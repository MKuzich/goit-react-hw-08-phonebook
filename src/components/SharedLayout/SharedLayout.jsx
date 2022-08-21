import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from 'components/Box';
import { HeaderLink } from './SharedLayout.styled';
import { useGetUserQuery } from 'redux/authSlice';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const SharedLayout = () => {
  const { data } = useGetUserQuery();
  return (
    <>
      <Box
        as="header"
        bg="darkBg"
        p={5}
        position="fixed"
        top={0}
        width={1}
        boxShadow="main"
        zIndex="1000"
      >
        <Box as="nav" display="flex" justifyContent="space-between" width={240}>
          <HeaderLink to="/register">Sign Up</HeaderLink>
          <HeaderLink to="/login">Sign In</HeaderLink>
          <HeaderLink to="/contacts">Contacts</HeaderLink>
        </Box>
        {data && <UserMenu />}
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
