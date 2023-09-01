import { useDispatch } from 'react-redux';
import { Input, Label } from 'components/AuthForm/AuthForm.styled';
import { filterContacts } from 'redux/contacts/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        onChange={onFilter}
      />
    </Label>
  );
};

export default Filter;
