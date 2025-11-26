import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AdminLayout from '@/components/layout/AdminLayout';
import Dashboard from '@/pages/Dashboard';
import ProductsTable from '@/pages/ProductsTable';
import LocalUsersTable from '@/pages/LocalUsersTable';
import Profile from '@/pages/Profile';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import ProtectedRoute from '@/components/ProtectedRoute';
import PublicRoute from '@/components/PublicRoute';
import { ROUTES } from '@/constants/routes.constant';
import { useTheme } from '@/store/themeStore';
import { useAuth } from '@/store/authStore';
import { useEffect } from 'react';
import { Toaster } from 'sonner';

function AuthChecker() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, checkAuth } = useAuth();

  useEffect(() => {
    const checkToken = async () => {
      const hasToken = document.cookie.split(';').some(c => c.trim().startsWith('token='));
      const isPublicRoute = location.pathname === '/login' || location.pathname === '/register';
      
      if (!hasToken && user && !isPublicRoute) {
        try {
          await checkAuth();
        } catch {
          logout();
          navigate('/login');
        }
      }
    };
    
    const interval = setInterval(checkToken, 2000);
    return () => clearInterval(interval);
  }, [user, location.pathname, logout, navigate, checkAuth]);

  return null;
}

function App() {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <>
    <BrowserRouter>
      <AuthChecker />
      <Routes>
        <Route path={ROUTES.LOGIN} element={<PublicRoute><Login /></PublicRoute>} />
        <Route path={ROUTES.REGISTER} element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="*" element={
          <ProtectedRoute>
            <AdminLayout>
              <Routes>
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.USERS_LIST} element={<ProductsTable />} />
                <Route path={ROUTES.LOCAL_USERS} element={<LocalUsersTable />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AdminLayout>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
    <Toaster richColors position="top-right" />
    </>
  );
}

export default App;

