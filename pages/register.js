import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';
import Auth from '../component/Auth'

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  const signUp = ({ email, pass }) => {
    console.log(email)
    auth.signup(email, pass)
      .then(() => {
        console.log('Success')
        router.push('/');
      })
      .catch((error) => {
        console.log('An error occurred.')
      });
  };

  return <Auth onclick={signUp} />;
}
