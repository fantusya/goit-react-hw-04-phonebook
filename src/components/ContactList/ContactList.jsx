import React from 'react';
import PropTypes from 'prop-types';
import { FcConferenceCall, FcPhoneAndroid, FcFullTrash } from 'react-icons/fc';
import ContactItem from 'components/ContactItem';
import {
  ContactListTable,
  ContactListTbody,
  ContactListThead,
  DeleteBtn,
} from './ContactList.styled';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <ContactListUl>
//       {contacts.map(contact => (
//         <li key={contact.id}>
//           <ContactItem name={contact.name} number={contact.number} />
//           <button type="button" onClick={() => onDeleteContact(contact.id)}>
//             Delete
//           </button>
//         </li>
//       ))}
//     </ContactListUl>
//   );
// };

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListTable>
      <ContactListThead>
        <tr>
          <th>
            <FcConferenceCall size={40} />
          </th>
          <th>
            <FcPhoneAndroid size={40} />
          </th>
        </tr>
      </ContactListThead>
      <ContactListTbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <ContactItem name={contact.name} number={contact.number} />
            <td>
              <DeleteBtn
                type="button"
                onClick={() => onDeleteContact(contact.id)}
              >
                <FcFullTrash size={30} />
              </DeleteBtn>
            </td>
          </tr>
        ))}
      </ContactListTbody>
    </ContactListTable>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
