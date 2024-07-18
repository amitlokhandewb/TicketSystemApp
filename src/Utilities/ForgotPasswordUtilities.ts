import { useState } from "react";
import { LoginFieldErrors } from "../Model/LoginModel";
import { VerifyEmailAsync } from "../Services/Services";

export const ForgotPasswordUtilities = () => {
  const [email, setEmail] = useState("");
  const [fieldErrors, setFieldErrors] = useState<LoginFieldErrors>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFields()) {
      setLoading(true);
      VerifyEmailAsync(email);
      setTimeout(() => {
        setLoading(false);
        alert("Form submitted successfully!");
      }, 2000);
    }
  };
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Invalid email address";
  };
  const validateFields = () => {
    const errors: LoginFieldErrors = {};
    errors.email = validateEmail(email);
    setFieldErrors(errors);
    return Object.keys(errors).every(
      (key) => !errors[key as keyof LoginFieldErrors]
    );
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmail(value);

    let error = "";
    if (name === "email") {
      error = validateEmail(value);
    }
    setFieldErrors({ ...fieldErrors, [name]: error });
  };
  return { handleSubmit, fieldErrors, email, loading, handleInputChange };
};
