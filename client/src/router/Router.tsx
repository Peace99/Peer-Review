import { Route, Routes } from "react-router-dom";
import { Auth } from "../views/auth/Auth";
import { LoginForm } from "../components/forms/login-form/LoginForm";
import { SignUpForm } from "../components/forms/sign-up/SignUpForm";
import { Profile } from "../views/profile/Profile";
import { SubmitReview } from "../views/submit-review/SubmitReview";
import { Editor } from "../views/editor/Editor";


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Auth />}>
        <Route path='/' element={<LoginForm />} />
        <Route path='/auth/sign-up' element={<SignUpForm />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="/review-form" element={<SubmitReview />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/editor' element={<Editor />}></Route>
    </Routes>
  );
}
