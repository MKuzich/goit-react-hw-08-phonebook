import { Box } from 'components/Box';

const Register = () => {
  return (
    <Box as="section" pt={8}>
      <h1>Sign Up form for new users</h1>
      <form>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
        </label>
        <label htmlFor="email">
          Password
          <input type="mail" name="email" />
        </label>
        <label htmlFor="password">
          Email
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </Box>
  );
};

export default Register;
