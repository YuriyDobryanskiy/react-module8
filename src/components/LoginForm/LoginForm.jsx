import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../../redux/auth/operations';

import styles from '../RegistrationForm/RegistrationForm.module.css';
import {
  isLoggedInSelector,
  userNameSelector,
} from '../../redux/auth/selectors';

const dataValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect data')
    .required('*Requied')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Incorrect data'
    )
    .max(30, 'Too long for the email'),

  password: Yup.string()
    .min(8, 'At least 8 symbols')
    .max(20, 'To long')
    .required('*Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(isLoggedInSelector);
  const userName = useSelector(userNameSelector);

  const handleSubmit = data => {
    dispatch(login(data));
  };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={dataValidationSchema}
      >
        <Form>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              Email
              <Field
                className={styles.formInput}
                type="text"
                name="email"
                placeholder="test@yahoo.com"
              ></Field>
            </label>
            <div className={styles.erroField}>
              <ErrorMessage
                name="email"
                style={{ display: 'flex' }}
                render={msg => <span className={styles.formError}>{msg}</span>}
              />
            </div>
          </div>
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              Password
              <Field
                type="text"
                className={styles.formInput}
                name="password"
                placeholder="Password"
              ></Field>
            </label>
            <div className={styles.erroField}>
              <ErrorMessage
                name="password"
                render={msg => <span className={styles.formError}>{msg}</span>}
              />
            </div>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Sign up
          </button>
        </Form>
      </Formik>

      {isLoggedIn && (
        <div>
          <h2>Welcome {userName}</h2>
        </div>
      )}
    </div>
  );
};

export default LoginForm;