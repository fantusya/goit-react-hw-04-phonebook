// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import { PageTitle, ContactsTitle } from './App.styled';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import { Box } from '../Box/Box.jsx';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    const isNameExistInPhonebook = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isNameExistInPhonebook) {
      toast.error(`${name} is already in contacts`, { pauseOnHover: false });

      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const onDeleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Box
      pt={5}
      pl={7}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-around"
      style={{
        gap: '16px',
      }}
    >
      <PageTitle>Phonebook</PageTitle>
      <Box
        display="inline-flex"
        alignItems="flex-start"
        justifyContent="space-around"
        style={{
          gap: '200px',
        }}
      >
        <Box
          display="inline-flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <ContactForm onSubmit={addContact} />
        </Box>
        <Box>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter
            value={filter}
            onChange={e => setFilter(e.currentTarget.value)}
          />
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={onDeleteContact}
          />
        </Box>
      </Box>
      <ToastContainer autoClose={3000} />
    </Box>
  );
};

// USING CLASS
// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       localStorage.setItem('contacts', JSON.stringify(nextContacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };

//     const isNameExistInPhonebook = this.state.contacts.some(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );

//     if (isNameExistInPhonebook) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     console.log(contacts);
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   onDeleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getVisibleContacts();

//     return (
//       <Box
//         pt={5}
//         pl={7}
//         display="flex"
//         flexDirection="column"
//         alignItems="flex-start"
//         justifyContent="space-around"
//         style={{
//           gap: '16px',
//         }}
//       >
//         <PageTitle>Phonebook</PageTitle>
//         <Box
//           display="inline-flex"
//           alignItems="flex-start"
//           justifyContent="space-around"
//           style={{
//             gap: '200px',
//           }}
//         >
//           <Box
//             display="inline-flex"
//             flexDirection="column"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <ContactForm onSubmit={this.addContact} />
//           </Box>
//           <Box>
//             <ContactsTitle>Contacts</ContactsTitle>
//             <Filter value={filter} onChange={this.changeFilter} />
//             <ContactList
//               contacts={visibleContacts}
//               onDeleteContact={this.onDeleteContact}
//             />
//           </Box>
//         </Box>
//       </Box>
//     );
//   }
// }

export default App;
