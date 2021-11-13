import { useAuth } from '../utils/auth';
import { useRouter } from 'next/router';
import Auth from '../component/Auth'
import {addNewUser} from '../utils/users'

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  const signUp = ({ email, pass }) => {
    auth.signup(email, pass)
      .then(user => {
        console.log(user)
        console.log('Success')
        addNewUser(email, user.uid).then(() => {
          router.push('/dashboard');
        })
      })
      .catch((error) => {
        console.log('An error occurred.')
      });
  };

  return <Auth onclick={signUp} />;
}
