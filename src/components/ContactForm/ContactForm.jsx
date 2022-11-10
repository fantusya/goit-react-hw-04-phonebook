import React from 'react';
import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Form,
  FormLabelContainer,
  Field,
  FormLabel,
  AddContactBtn,
  ErrorMessageCustom,
} from './ContactForm.styled';

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .min(2, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/
    )
    .min(5, 'Too short!')
    .max(30, 'Too long!')
    .required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form autoComplete="off">
        <FormLabelContainer>
          <Field name="name" type="text" placeholder="Anne-Marie O'Connor" />
          <FormLabel>Name</FormLabel>
          <ErrorMessage name="name" component="span">
            {() => (
              <ErrorMessageCustom>
                Letters are required (2-30 symbols)
              </ErrorMessageCustom>
            )}
          </ErrorMessage>
        </FormLabelContainer>
        <FormLabelContainer>
          <Field name="number" type="tel" placeholder="+38-(012)-345-67-89" />
          <FormLabel>Number</FormLabel>
          <ErrorMessage name="number" component="span">
            {() => (
              <ErrorMessageCustom>
                Digits are required (5-20 symbols)
              </ErrorMessageCustom>
            )}
          </ErrorMessage>
        </FormLabelContainer>
        <AddContactBtn type="submit">Add contact</AddContactBtn>
      </Form>
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// as class without Formik

// class ContactForm extends Component {
//   state = {
//       name: '',
//       number: ''
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit(this.state.name, this.state.number);

//     this.setState({
//       name: '',
//       number: ''
//     });
//   };

//     handleChangeName = e => {
//     this.setState({ name: e.target.value});
//     };

//     handleChangeNumber = e => {
//     this.setState({ number: e.target.value});
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={this.state.name}
//           onChange={this.handleChangeName}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//             />
//         <input
//           type="tel"
//           name="number"
//           value={this.state.number}
//           onChange={this.handleChangeNumber}
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//         <button type="submit">Add contact</button>
//       </form>
//     );
//   }
// }
