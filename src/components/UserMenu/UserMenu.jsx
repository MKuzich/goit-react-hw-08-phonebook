import { useGetUserQuery } from 'redux/authSlice';

export const UserMenu = () => {
  const { data } = useGetUserQuery();
  console.log(data);
  return <p>hey hey</p>;
};
