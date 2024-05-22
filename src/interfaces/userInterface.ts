export interface ProviderData {
  providerId: string;
  uid: string;
  displayName: string;
  email: string;
  phoneNumber?: any;
  photoURL: string;
}

export interface StsTokenManage {
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}

export interface UserInfo {
  uid: string;
  email: string;
  emailVerified: boolean;
  displayName: string;
  isAnonymous: boolean;
  photoURL: string;
  providerData: ProviderData[];
  stsTokenManager: StsTokenManage;
  createdAt: string;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}

export interface User {
  userInfo: UserInfo;
  isLoading: boolean;
  hasFailed: boolean;
  isAuth: boolean;
  localError?: any;
}
