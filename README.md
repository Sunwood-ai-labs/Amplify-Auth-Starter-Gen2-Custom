# Amplify Auth Starter Gen2 Custom

AWS Amplify Gen2とCognitoを使用した認証機能のスターターキット

## 🌟 機能

- ✅ メールアドレスを使用したサインアップ/サインイン
- ✅ メールアドレスの確認
- ✅ パスワードリセット (SESを使用)
- ✅ セッション管理
- ✅ 保護されたルート

## 🛠️ 技術スタック

- React + TypeScript
- AWS Amplify Gen2
- AWS Cognito
- AWS SES
- Vite
- React Router

## 📋 前提条件

- Node.js 18.x以上
- npm 9.x以上
- AWSアカウント
- AWS CLIのセットアップと認証済み

## 🚀 はじめ方

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-username/Amplify-Auth-Starter-Gen2-Custom.git
cd Amplify-Auth-Starter-Gen2-Custom
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. Amplifyバックエンドの設定

```bash
# Amplifyサンドボックスの起動
npx amplify sandbox
```

### 4. 環境変数の設定

`.env.local`ファイルを作成し、以下の内容を設定:

```env
VITE_COGNITO_USER_POOL_ID=your-user-pool-id
VITE_COGNITO_USER_POOL_CLIENT_ID=your-client-id
```

### 5. アプリケーションの起動

```bash
npm run start
```

アプリケーションは http://localhost:3000 で実行されます。

## 📁 プロジェクト構造

```
src/
├── components/     # 共通コンポーネント
├── pages/         # ページコンポーネント
├── hooks/         # カスタムフック
├── utils/         # ユーティリティ関数
└── App.tsx        # メインアプリケーション
```

## 🔒 認証フロー

1. **サインアップ**
   - メールアドレスとパスワードで登録
   - 確認コードがメールで送信
   - コードを入力して確認

2. **サインイン**
   - メールアドレスとパスワードでログイン
   - 成功するとホームページにリダイレクト

3. **パスワードリセット**
   - メールアドレスを入力
   - リセットコードがメールで送信
   - 新しいパスワードとコードを入力

## 🛡️ セキュリティ設定

- パスワードポリシー
  - 最小8文字
  - 大文字小文字を含む
  - 数字を含む
  - 特殊文字を含む

- メール確認が必須
- セッショントークンの自動更新

## 🤝 貢献

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m '新機能を追加'`)
4. ブランチをプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📝 ライセンス

MITライセンスの下で公開されています。

## 🙏 謝辞

- AWS Amplifyチーム
- Reactコミュニティ
- オープンソースコントリビューター
