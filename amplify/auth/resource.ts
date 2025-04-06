import { defineAuth } from '@aws-amplify/backend';
import { PasswordResetEmail } from './templates/password-reset-email';

export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: undefined
  },
  verification: {
    verificationEmailSubject: 'メールアドレスの確認',
    verificationEmailBody: '認証コード: {####}',
  },
  passwordPolicy: {
    minLength: 8,
    requireNumbers: true,
    requireSpecialCharacters: true,
    requireUppercase: true,
    requireLowercase: true
  },
  multifactor: {
    mode: 'OFF',
    sms: {
      smsMessage: (code) => `認証コード: ${code}`
    }
  },
  enableUserEmailVerification: true,
  passwordRecovery: {
    deliveryMethod: 'EMAIL',
    emailMessage: PasswordResetEmail,
    emailSubject: 'パスワードのリセット'
  }
});
