import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 0'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>ページが見つかりません</h2>
      <p style={{ marginBottom: '2rem', textAlign: 'center' }}>
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link 
        to="/" 
        className="btn btn-primary"
        style={{ textDecoration: 'none' }}
      >
        ホームに戻る
      </Link>
    </div>
  );
};

export default NotFound;
