import React from "react";
import GenericFormLayout from "../Components/GenericComponents/GenericFormLayout";
import ForgotPasswordForm from "../Components/ForgotPasswordComponents/ForgotPasswordForm";

function ForgotPasswordPage() {
  return (
    <div>
      <GenericFormLayout Title="Enter your Email Address">
        <ForgotPasswordForm />
      </GenericFormLayout>
    </div>
  );
}

export default ForgotPasswordPage;
