import { Box } from 'components/Box';
import { useLogInMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [logIn] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      const user = await logIn({ email, password }).unwrap();
      dispatch(setCredentials(user));
      navigate('/');
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box as="section" pt={8}>
      <h1>Sign In form for registered users</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input type="mail" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </Box>
  );
};

export default Login;
