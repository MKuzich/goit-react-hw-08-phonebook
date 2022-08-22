import { useGetUserQuery, useLogOutMutation } from 'redux/authSlice';

export const UserMenu = () => {
  const { data } = useGetUserQuery();
  const [logOut] = useLogOutMutation();

  return (
    <>
      <p>${data.user.email}</p>
      <button type="button" onClick={logOut}>
        Log Out
      </button>
    </>
  );
};
