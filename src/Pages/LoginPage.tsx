import GenericFormLayout from "../Components/GenericComponents/GenericFormLayout";
import LoginForm from "../Components/LoginPageComponents/LoginForm";

function LoginPage() {
  return (
      <GenericFormLayout Title="Welcome to Ticket System">
        <LoginForm />
      </GenericFormLayout>
  );
}

export default LoginPage;
