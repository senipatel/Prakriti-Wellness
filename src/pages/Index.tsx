// This page is now replaced by Home.tsx - redirecting users to the new home page
import { Navigate } from "react-router-dom";

const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
