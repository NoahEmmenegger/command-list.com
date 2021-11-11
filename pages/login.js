import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  const signUp = ({ email, pass }) => {
    console.log(email)
    auth.signin(email, pass)
      .then(() => {
        console.log('Success')
        //router.push('/deals');
      })
      .catch((error) => {
        console.log('An error occurred.')
      });
  };

  return <input type="submit" onClick={() => {signUp({email: 'testasdf@gmail.com', pass: 'test1234'})}} />;
}