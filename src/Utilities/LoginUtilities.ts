import { useState } from "react";
import { LoginFieldErrors, LoginForm } from "../Model/LoginModel";

export const LoginUtilities = () => {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<LoginFieldErrors>({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address";
  };

  const validatePassword = (password: string) => {
    return password.length >= 6
      ? ""
      : "Password must be at least 6 characters long";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let error = "";
    if (name === "email") {
      error = validateEmail(value);
    } else if (name === "password") {
      error = validatePassword(value);
    }
    setFieldErrors({ ...fieldErrors, [name]: error });
  };

  const validateFields = () => {
    const errors: LoginFieldErrors = {};
    errors.email = validateEmail(formData.email);
    errors.password = validatePassword(formData.password);
    setFieldErrors(errors);
    return Object.keys(errors).every(
      (key) => !errors[key as keyof LoginFieldErrors]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Form submitted successfully!");
      }, 2000);
    }
  };

  return { handleSubmit, fieldErrors, formData, handleInputChange, loading };
};
