import { Button } from 'components/ContactList/ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { selectUser } from 'redux/auth/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </>
  );
};

export default UserMenu;
