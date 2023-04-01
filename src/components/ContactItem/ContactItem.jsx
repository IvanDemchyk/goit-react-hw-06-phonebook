import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/itemSlice';
import { Item, DelBtn } from './ContactItem.styled';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Item>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <DelBtn type="button" onClick={onDelete}>
        Delete
      </DelBtn>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
