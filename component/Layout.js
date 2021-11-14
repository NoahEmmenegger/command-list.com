import { useAuth } from '../utils/auth';
import Footer from './Footer';
import Link from "next/link"

export default function Layout({ children }) {
  const auth = useAuth();

  return (
    <>
      <header>

        <nav>{auth.user ? (<div>
          {auth.user.email}
          <button onClick={auth.signout}>Sign Out</button>
        </div>) : 'You are not logged in!'}</nav>
      </header>
      <main className="flex flex-col items-center justify-center py-72">
        {children}
      </main>
      <Footer />
    </>
  );
}