import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { isLoggedInSelector, userNameSelector } from '../redux/auth/selectors';

const LoginPage = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const userName = useSelector(userNameSelector);

  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      {isLoggedIn && (
        <div>
          <h2>Welcome {userName}</h2>
        </div>
      )}
      <LoginForm />
    </>
  );
};

export default LoginPage;
