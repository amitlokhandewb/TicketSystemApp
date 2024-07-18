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
export interface RegisterFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  role: number;
  reportingperson1: number;
  reportingperson2: number;
}

export interface RegisterFormErrors {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  password?: string;
  role?: string;
  reportingperson1?: string;
  reportingperson2?: string;
}
export interface FieldErrorRaise {
  title?: string;
  priority? : string;
  status?: string
  description? : string;
}
export interface RaiseForm{
  title: string;
  priority: number;
  status: number;
}