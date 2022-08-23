import { useLogOutMutation } from 'redux/authApi';
import { useAuth } from 'redux/useAuth';
import { setCredentials } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const [logOut] = useLogOutMutation();
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nahdleOnClick = async () => {
    try {
      await logOut();
      dispatch(setCredentials({ user: null, token: null }));
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>{auth.user.email}</p>
      <button type="button" onClick={nahdleOnClick}>
        Log Out
      </button>
    </>
  );
};
