import { Box } from 'components/Box';
import { useSignUpMutation } from 'redux/authSlice';

const Register = () => {
  const [signUp] = useSignUpMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    signUp({ name, email, password })
      .then(r => {
        console.log(r);
        e.target.reset();
      })
      .catch(error => console.log(error.message));
  };
  return (
    <Box as="section" pt={8}>
      <h1>Sign Up form for new users</h1>
      <form onSubmit={handleSubmit}>
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
