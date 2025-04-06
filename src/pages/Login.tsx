import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import type { AuthenticatorProps } from '@aws-amplify/ui-react';

const Login = () => {
  const navigate = useNavigate();
  const { user } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const formFields = {
    signIn: {
      username: {
        label: 'メールアドレス',
        placeholder: 'メールアドレスを入力してください',
      },
      password: {
        label: 'パスワード',
        placeholder: 'パスワードを入力してください',
      },
    },
    signUp: {
      username: {
        label: 'メールアドレス',
        placeholder: 'メールアドレスを入力してください',
      },
      password: {
        label: 'パスワード',
        placeholder: 'パスワードを入力してください',
      },
      confirm_password: {
        label: 'パスワード（確認）',
        placeholder: 'パスワードを再入力してください',
      },
    },
    confirmSignUp: {
      confirmation_code: {
        label: '確認コード',
        placeholder: 'メールに送信された確認コードを入力してください',
      },
    },
  };

  const components: AuthenticatorProps['components'] = {
    Footer() {
      return (
        <View textAlign="center">
          <Link to="/reset-password" style={{ color: 'var(--primary-color)' }}>
            パスワードをお忘れですか？
          </Link>
        </View>
      );
    },
  };

  return (
    <div style={{ 
      maxWidth: '400px',
      margin: '0 auto',
      padding: '2rem 0'
    }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        ログイン / 新規登録
      </h1>
      <Authenticator
        formFields={formFields}
        components={components}
        signUpAttributes={['email']}
        hideSignUp={false}
      >
        {({ signOut, user }) => (
          <div style={{ display: 'none' }} />
        )}
      </Authenticator>
    </div>
  );
};

export default Login;
