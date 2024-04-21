import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './ContactForm.module.css';

import { addContact } from '../../redux/contacts/operations';

const dataValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Phone number is not valid')
    .required('Required')
    .min(6, 'Too Short!')
    .max(12, 'Too Long!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const addUser = (data, actions) => {
    dispatch(addContact({ ...data }));
    actions.resetForm();
  };

  const [userSvgColor, setUserSvgColor] = useState(true);
  const [phoneSvgColor, setPhoneSvgColor] = useState(true);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={addUser}
      validationSchema={dataValidationSchema}
    >
      <Form className={styles.addContactForm}>
        <div className={styles.inputFieldContainer}>
          <label
            className={styles.inputLabel}
            onFocus={() => {
              setUserSvgColor(false);
            }}
            onMouseEnter={() => {
              setUserSvgColor(false);
            }}
            onMouseLeave={() => {
              setUserSvgColor(true);
            }}
            onBlur={() => {
              setUserSvgColor(true);
            }}
          >
            Name
            <Field
              type="text"
              name="name"
              className={styles.inputField}
            ></Field>
          </label>

          <div className={styles.erroField}>
            <ErrorMessage
              name="name"
              render={msg => <span className={styles.formError}>{msg}</span>}
            />
          </div>
        </div>
        <div className={styles.inputFieldContainer}>
          <label
            className={styles.inputLabel}
            onFocus={() => {
              setPhoneSvgColor(false);
            }}
            onMouseEnter={() => {
              setPhoneSvgColor(false);
            }}
            onMouseLeave={() => {
              setPhoneSvgColor(true);
            }}
            onBlur={() => {
              setPhoneSvgColor(true);
            }}
          >
            Number
            <Field type="text" name="number" className={styles.inputField} />
          </label>

          <div className={styles.erroField}>
            <ErrorMessage
              name="number"
              render={msg => <span className={styles.formError}>{msg}</span>}
            />
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
