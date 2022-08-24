import React from 'react';
import { Item, Text } from './Contact.styled';
import PropTypes from 'prop-types';
import { useRemoveContactMutation } from 'redux/contactsApi';
import { Button } from 'react-bootstrap';

export const Contact = ({ name, number, id }) => {
  const [removeContact] = useRemoveContactMutation();

  const handleRemoveContact = e => {
    removeContact(e.target.id);
  };
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button
        variant="outline-primary"
        type="button"
        onClick={handleRemoveContact}
        id={id}
      >
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
