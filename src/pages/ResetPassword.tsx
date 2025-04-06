import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { resetPassword, confirmResetPassword } from 'aws-amplify/auth';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState<'request' | 'reset'>('request');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRequestCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await resetPassword({ username: email });
      setSuccess('確認コードをメールで送信しました');
      setStep('reset');
    } catch (err) {
      setError('確認コードの送信に失敗しました');
      console.error('Error requesting code:', err);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await confirmResetPassword({
        username: email,
        confirmationCode: code,
        newPassword: newPassword
      });
      setSuccess('パスワードがリセットされました');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      setError('パスワードのリセットに失敗しました');
      console.error('Error resetting password:', err);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '2rem 0' }}>
      <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        パスワードのリセット
      </h1>
      
      {error && (
        <div className="error-message" style={{ textAlign: 'center' }}>
          {error}
        </div>
      )}
      
      {success && (
        <div className="success-message" style={{ textAlign: 'center' }}>
          {success}
        </div>
      )}

      {step === 'request' ? (
        <form onSubmit={handleRequestCode}>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            確認コードを送信
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword}>
          <div className="form-group">
            <label htmlFor="code">確認コード</label>
            <input
              type="text"
              id="code"
              className="form-control"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">新しいパスワード</label>
            <input
              type="password"
              id="newPassword"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            パスワードをリセット
          </button>
        </form>
      )}

      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <Link to="/login" style={{ color: 'var(--primary-color)' }}>
          ログインに戻る
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
