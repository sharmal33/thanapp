import config from 'react-native-config';

const env = {
  api: {
    envId: config.ENV_ID, // [auth-component] This line is generated automatically. Please don't remove it
    appId: config.APP_ID, // [auth-component] This line is generated automatically. Please don't remove it
    codeChallenge: config.CODE_CHALLENGE, // [auth-component] This line is generated automatically. Please don't remove it
    codeVerifier: config.CODE_VERIFIER, // [auth-component] This line is generated automatically. Please don't remove it
    bankId: config.BANK_ID, // [auth-component] This line is generated automatically. Please don't remove it
    authBaseUrl: config.AUTH_BASE_URL, // [auth-component] This line is generated automatically. Please don't remove it
    redirectUrl: config.REDIRECT_URL, // [auth-component] This line is generated automatically. Please don't remove it
    apiBaseUrl: config.API_BASE_URL, // [auth-component] This line is generated automatically. Please don't remove it
    membershipBaseUrl: config.MEMBERSHIP_BASE_URL, // [user-profile-component] This line is generated automatically. Please don't remove it
    walletBaseUrl: config.WALLET_BASE_URL, // [dashboard-component] This line is generated automatically. Please don't remove it
    bankingProductInfoBaseUrl: config.BANKING_PRODUCT_INFO_BASE_URL, // [dashboard-component] This line is generated automatically. Please don't remove it
  },
};

export default env;
