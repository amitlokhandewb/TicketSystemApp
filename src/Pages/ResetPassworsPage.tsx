import React from "react";
import GenericFormLayout from "../Components/GenericComponents/GenericFormLayout";
import ResetPasswordForm from "../Components/ResetPasswordComponents/ResetPasswordForm";

function ResetPassworsPage() {
  return (

      <GenericFormLayout Title="Reset your Password">
        <ResetPasswordForm />
      </GenericFormLayout>

  );
}

export default ResetPassworsPage;
