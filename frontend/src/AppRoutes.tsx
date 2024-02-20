import { Layout } from "@/layouts/layout";
import { AuthCallbackPage } from "@/pages/AuthCallbackPage";
import { HomePage } from "@/pages/homepage";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route path="/user-profile" element={<span>User Profile Page</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
