import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
        <p style={{ textAlign: 'center', padding: '2rem 0' }}>
          © {new Date().getFullYear()} Amplify Auth Starter. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
