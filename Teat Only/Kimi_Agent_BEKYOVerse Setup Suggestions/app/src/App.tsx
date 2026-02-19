import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AdminProvider } from './contexts/AdminContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TraditionalClass from './pages/TraditionalClass';
import DigitalClass from './pages/DigitalClass';
import AdminDashboard from './pages/AdminDashboard';
import PricingPage from './pages/PricingPage';
import MascotPage from './pages/services/MascotPage';
import StickersPage from './pages/services/StickersPage';
import IllustrationPage from './pages/services/IllustrationPage';
import ComicPage from './pages/services/ComicPage';
import AnimationPage from './pages/services/AnimationPage';

// ─── Protected route wrappers ─────────────────────────────────────────────────

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
}

function RequireAdmin({ children }: { children: React.ReactNode }) {
  const { isAdmin } = useAuth();
  return isAdmin ? <>{children}</> : <Navigate to="/dashboard" replace />;
}

function RequireStudent({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isAdmin } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (isAdmin) return <Navigate to="/admin" replace />;
  return <>{children}</>;
}

// ─── Login page — redirect if already logged in ───────────────────────────────

function LoginPage() {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(isAdmin ? '/admin' : '/dashboard', { replace: true });
    }
  }, [isAuthenticated, isAdmin, navigate]);

  // Global navigate helper for legacy code
  useEffect(() => {
    (window as any).navigateTo = (page: string) => navigate(`/${page}`);
  }, [navigate]);

  return <Login />;
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <BrowserRouter>
      <AdminProvider>
        <AuthProvider>
          <LanguageProvider>
            <PaymentProvider>
              <Routes>
                {/* Public */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/pricing/:category" element={<PricingPage />} />

                {/* Services */}
                <Route path="/services/mascot" element={<MascotPage />} />
                <Route path="/services/stickers" element={<StickersPage />} />
                <Route path="/services/illustration" element={<IllustrationPage />} />
                <Route path="/services/comic" element={<ComicPage />} />
                <Route path="/services/animation" element={<AnimationPage />} />

                {/* Student */}
                <Route path="/dashboard" element={<RequireStudent><Dashboard /></RequireStudent>} />
                <Route path="/traditional" element={<RequireStudent><TraditionalClass /></RequireStudent>} />
                <Route path="/digital" element={<RequireStudent><DigitalClass /></RequireStudent>} />

                {/* Admin */}
                <Route path="/admin" element={<RequireAuth><RequireAdmin><AdminDashboard /></RequireAdmin></RequireAuth>} />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </PaymentProvider>
          </LanguageProvider>
        </AuthProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}
