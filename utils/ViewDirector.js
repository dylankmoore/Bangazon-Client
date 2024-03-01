import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading, updateUser } = useAuth();
  const router = useRouter(); // Use useRouter to access the current route

  // if user state is loading, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // Check if the current route is the registration page
  if (router.pathname === '/registration') {
    // Render the registration form if on the registration route and pass updateUser
    return <RegisterForm updateUser={updateUser} />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBar /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="container">
          <Component {...pageProps} />
        </div>
      </>
    );
  }

  // Redirect to sign in page if not logged in and not trying to access registration
  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
