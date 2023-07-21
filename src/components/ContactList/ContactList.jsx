import { ListWrapper, Item, Fragment, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ListWrapper>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <Fragment>
            {name}: {number}
          </Fragment>
          <Button type="button" onClick={() => dispatch(deleteContacts(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ListWrapper>
  );
};
