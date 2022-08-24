import { useSignUpMutation } from 'redux/authApi';
import { Button, Form, Container } from 'react-bootstrap';
import { Title, Section } from './Register.styled';

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
    <Container>
      <Section>
        <Title>Sign Up form for new users</Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button type="submit">Sign Up</Button>
        </Form>
      </Section>
    </Container>
  );
};

export default Register;
