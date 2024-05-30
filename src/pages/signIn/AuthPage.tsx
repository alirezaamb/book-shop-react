import SignIn from '../../components/signIn/SignIn';
import { useSearchParams } from 'react-router-dom';
import SignUp from '../../components/signUp/SignUp';

const AuthPage = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   console.log(searchParams);
  const [searchParams, setSearchParams] = useSearchParams();
  const action = searchParams.get('action');

  return action === 'signup' ? (
    <SignUp setSearchParams={setSearchParams} />
  ) : (
    <SignIn setSearchParams={setSearchParams} />
  );
};

export default AuthPage;
