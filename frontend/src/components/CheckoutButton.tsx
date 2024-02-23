import { LoadingButton } from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

export const CheckoutButton = () => {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    // add callback url after logged in
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Log in to checkout
      </Button>
    );
  }

  if (isAuthLoading) {
    return <LoadingButton />
  }

  return <div>CheckoutButton</div>;
};
