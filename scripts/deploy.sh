#!/bin/bash

# エラーが発生したら即座に終了
set -e

# 環境変数の設定
BUCKET_NAME="my-website-secure-deploy"
REGION="ap-northeast-1"

echo "🚀 デプロイを開始します..."

# ビルド
echo "📦 プロジェクトをビルドしています..."
npm run build

# buildディレクトリに移動してZIP化
echo "🗜️ ビルドファイルをZIP化しています..."
cd build && zip -r ../build.zip . && cd ..

# S3バケットの存在確認
if ! aws s3 ls "s3://$BUCKET_NAME" 2>&1 > /dev/null; then
  echo "🪣 S3バケットを作成しています..."
  aws s3api create-bucket \
    --bucket $BUCKET_NAME \
    --create-bucket-configuration LocationConstraint=$REGION
fi

# ビルドファイルのアップロード
echo "📤 S3にファイルをアップロードしています..."
aws s3 cp build.zip "s3://$BUCKET_NAME/"

echo "✨ デプロイが完了しました！"
echo "🌐 AWS Amplifyコンソールで残りの手順を実行してください："
echo "1. https://ap-northeast-1.console.aws.amazon.com/amplify/home にアクセス"
echo "2. プロジェクト「my-website-secure」を選択"
echo "3. 「ホスティング」タブを選択"
echo "4. 「main」ブランチを選択"
echo "5. 「デプロイ」ボタンをクリック"
echo "6. S3のURL: s3://$BUCKET_NAME/build.zip を入力"
echo "7. 「保存してデプロイ」をクリック"
