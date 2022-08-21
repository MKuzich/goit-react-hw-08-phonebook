import { Box } from 'components/Box';
import { useLogInMutation } from 'redux/authSlice';

const Login = () => {
  const [logIn] = useLogInMutation();
  const handleSubmit = e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    logIn({ email, password })
      .then(r => {
        console.log(r);
        e.target.reset();
      })
      .catch(error => console.log(error.message));
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
