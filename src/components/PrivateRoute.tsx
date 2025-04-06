import { Navigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useAuthenticator((context) => [context.user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
