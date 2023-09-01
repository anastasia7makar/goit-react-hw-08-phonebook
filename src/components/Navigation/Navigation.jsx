import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Header, NavContainer, NavItem , AuthContainer} from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <NavContainer>
        <NavItem to="/" end>
          Home
        </NavItem>
        {isLoggedIn ? (
          <NavItem to="/contacts">Contacts</NavItem>
        ) : (
          <AuthContainer>
            <NavItem to="/register">Register</NavItem>
            <NavItem to="/login">Log In</NavItem>
          </AuthContainer>
        )}
        {isLoggedIn && <UserMenu />}
      </NavContainer>
    </Header>
  );
};

export default Navigation;
