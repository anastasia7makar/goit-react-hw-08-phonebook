import { Container, Description, Logo } from 'components/Layout/Layout.styled';

const Home = () => {
  return (
    <Container>
      <h1>
        Welcome to the <Logo>TeleSphere</Logo> application!
      </h1>
      <Description>Here you can add and filter your contacts</Description>
    </Container>
  );
};

export default Home;
