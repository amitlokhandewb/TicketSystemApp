import { useState } from "react";
import { ResetPasswordFormData, ResetPasswordFieldErrors } from "../Model/LoginModel";

export const ResetPasswordUtilities = () => {
    const [formData, setFormData] = useState<ResetPasswordFormData>({
        newPassword: "",
        confirmPassword: "",
      });
    
      const [fieldErrors, setFieldErrors] = useState<ResetPasswordFieldErrors>({
        newPassword: "",
        confirmPassword: "",
      });
    
      const [loading, setLoading] = useState(false);
    
      const validatePassword = (password: string) => {
        return password.length >= 6
          ? ""
          : "Password must be at least 6 characters long";
      };
    
      const validateConfirmPassword = (confirmPassword: string) => {
        return confirmPassword === formData.newPassword
          ? ""
          : "Passwords do not match";
      };
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    
        let error = "";
        if (name === "newPassword") {
          error = validatePassword(value);
        } else if (name === "confirmPassword") {
          error = validateConfirmPassword(value);
        }
        setFieldErrors({ ...fieldErrors, [name]: error });
      };
    
      const validateFields = () => {
        const errors: ResetPasswordFieldErrors = {
          newPassword: validatePassword(formData.newPassword),
          confirmPassword: validateConfirmPassword(formData.confirmPassword),
        };
        setFieldErrors(errors);
        return Object.keys(errors).every(
          (key) => !errors[key as keyof ResetPasswordFieldErrors]
        );
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateFields()) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            alert("Password reset successfully!");
          }, 2000);
        }
      };
    return {handleSubmit,fieldErrors,formData,handleInputChange,loading}
} 