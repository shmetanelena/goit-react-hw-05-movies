//import styles from './N.module.css';
// import { NavLink } from 'react-router-dom';
import {
  Container,
  Header,
  NavigationLink,
  Nav,
  Logo,
} from './Navigation.styled';

const Navigation = () => (
  <Container>
    <Header>
      <Nav>
        <Logo> 📽</Logo>
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/movies">Movies</NavigationLink>
      </Nav>
    </Header>
  </Container>
);

export default Navigation;
