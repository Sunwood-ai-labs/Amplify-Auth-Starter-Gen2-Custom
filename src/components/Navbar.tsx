import { useNavigate, Link } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Navbar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <nav style={{
      backgroundColor: 'var(--primary-color)',
      padding: '1rem',
      marginBottom: '2rem'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem' }}>
          Auth Starter
        </Link>
        <div>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'white' }}>
                {user.username}
              </span>
              <button
                onClick={handleSignOut}
                className="btn"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--primary-color)'
                }}
              >
                サインアウト
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn"
              style={{
                backgroundColor: 'white',
                color: 'var(--primary-color)',
                textDecoration: 'none'
              }}
            >
              ログイン
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
