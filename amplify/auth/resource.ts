import { defineAuth } from "@aws-amplify/backend";

/**
 * 認証リソースの定義と設定
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      callbackUrls: ['http://localhost:3000'],
      logoutUrls: ['http://localhost:3000']
    }
  }
});
