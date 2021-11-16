import { useAuth } from '../utils/auth';
import Footer from './Footer';
import Link from "next/link"

export default function Layout({ children }) {
  const auth = useAuth();

  return (
    <>
      <header>
        <nav className="p-10 px-20">
          <h>Command-list.com</h>
          <ul className="flex float-right align-middle">
            <li className="px-10 m-auto"><Link href="/register">Register</Link></li>
            <li className="px-10 m-auto"><Link href="/dashboard">Dashboard</Link></li>
            <li className="px-10 m-auto"><Link href="/create">Create Page</Link></li>
            {auth.user ?
              (
                <button onClick={auth.signout} className="px-10 btn">Sign Out</button>
              ) : <li className="px-10 btn"><Link href="/login">Login</Link></li>
            }
          </ul>
        </nav>

      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}