import { useAuthenticator } from '@aws-amplify/ui-react';
import { AuthUser } from '@aws-amplify/auth';

interface CognitoUserAttributes {
  email?: string;
  email_verified?: boolean;
}

const Home = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const cognitoUser = user as AuthUser & { attributes?: CognitoUserAttributes };

  return (
    <div style={{ padding: '2rem 0' }}>
      <h1 style={{ marginBottom: '2rem' }}>ようこそ</h1>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>ユーザー情報</h2>
        <div style={{ marginBottom: '1rem' }}>
          <strong>ユーザー名:</strong> {cognitoUser?.username}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>メールアドレス:</strong> {cognitoUser?.attributes?.email}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>メール確認状態:</strong> {
            cognitoUser?.attributes?.email_verified ? '確認済み' : '未確認'
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
