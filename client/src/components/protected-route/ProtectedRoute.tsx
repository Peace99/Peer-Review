import { ReactNode } from "react";
import { isAuthenticated } from "../../common/util";
import { Navigate } from "react-router-dom";

interface props {
  children: ReactNode;
}

export function ProtectedRoute({ children }: props) {
  if (!isAuthenticated()) return <Navigate to="/auth" />;
  return children;
}
