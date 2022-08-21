import { Contacts } from 'components/Contacts/Contacts';
import { ContactAddForm } from 'components/ContactAddForm/ContactAddForm';
import { Filter } from 'components/Filter/Filter';
import { Header, SecondHeader, Section } from './ContactsSection.styled';
import { useState } from 'react';
import { Box } from 'components/Box';

const ContactsSection = () => {
  const [filter, setFilter] = useState('');
  const filterChange = value => {
    setFilter(value);
  };
  return (
    <Box pt={8}>
      <Section>
        <Header>Phonebook</Header>
        <ContactAddForm />
        <SecondHeader>Contacts</SecondHeader>
        <Filter filterChange={filterChange} />
        <Contacts filter={filter} />
      </Section>
    </Box>
  );
};

export default ContactsSection;
