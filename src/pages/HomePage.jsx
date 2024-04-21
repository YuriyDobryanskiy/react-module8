import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../redux/auth/selectors';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  useSelector(isLoggedInSelector);
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h3 style={{ marginTop: ' 80px', textAlign: 'center' }}>
        Welcome to contact book.
      </h3>
    </div>
  );
};

export default HomePage;
