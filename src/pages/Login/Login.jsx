import { Box } from 'components/Box';

const login = () => {
  return (
    <Box as="section" pt={8}>
      <h1>Sign In form for registered users</h1>
      <form>
        <label htmlFor="email">
          Password
          <input type="mail" name="email" />
        </label>
        <label htmlFor="password">
          Email
          <input type="text" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </Box>
  );
};

export default login;
