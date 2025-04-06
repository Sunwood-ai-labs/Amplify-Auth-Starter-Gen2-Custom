export const PasswordResetEmail = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>パスワードのリセット</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <div style="max-width: 600px; margin: 0 auto;">
    <h1 style="color: #333;">パスワードのリセット</h1>
    
    <p>パスワードリセットのリクエストを受け付けました。</p>
    
    <p>以下の認証コードを使用してパスワードをリセットしてください：</p>
    
    <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; text-align: center;">
      <h2 style="margin: 0; color: #333; font-size: 24px;">{####}</h2>
    </div>
    
    <p>このコードは30分間有効です。</p>
    
    <p>このリクエストに心当たりがない場合は、このメールを無視してください。</p>
    
    <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
    
    <p style="color: #666; font-size: 12px;">
      このメールは自動送信されています。返信はできませんのでご注意ください。
    </p>
  </div>
</body>
</html>
`;
