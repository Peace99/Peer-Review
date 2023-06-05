import { Route, Routes } from "react-router-dom";
import { Auth } from "../views/auth/Auth";
import { LoginForm } from "../components/forms/login-form/LoginForm";
import { SignUpForm } from "../components/forms/sign-up/SignUpForm";
import { Profile } from "../views/profile/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />}>
        <Route path="/auth" element={<LoginForm />} />
        <Route path="/auth/sign-up" element={<SignUpForm />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
