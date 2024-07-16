export interface LoginForm {
  email: string;
  password: string;
}
export interface LoginFieldErrors {
  email?: string;
  password?: string;
}
export interface ResetPasswordFormData {
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordFieldErrors {
  newPassword: string;
  confirmPassword: string;
}
