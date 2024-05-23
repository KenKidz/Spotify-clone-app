export enum profileMenu {
  Profile = 1,
  Logout
}

export enum AuthErrorCodes {
  EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  INVALID_EMAIL = "auth/invalid-email",
  OPERATION_NOT_ALLOWED = "auth/operation-not-allowed",
  WEAK_PASSWORD = "auth/weak-password",
  USER_NOT_FOUND = "auth/user-not-found",
  WRONG_PASSWORD = "auth/wrong-password",
  INVALID_CREDENTIAL = "auth/invalid-credential",
  INVALID_LOGIN_CREDENTIALS = "auth/invalid_login_credentials"
}
