import { useAuth } from '../utils/auth';
import Footer from './Footer';

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <>
      <header>

        <nav>{user ? user.email : 'You are not logged in!'}</nav>
      </header>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        {children}
      </main>
      <Footer/>
    </>
  );
}