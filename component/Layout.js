import { useAuth } from '../utils/auth';
import Footer from './Footer';

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <>
      <header>

        <nav>{user ? user.email : 'You are not logged in!'}</nav>
      </header>
      <main className="flex flex-col items-center justify-center py-72">
        {children}
      </main>
      <Footer />
    </>
  );
}