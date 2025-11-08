import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Categories } from '@/components/Categories';
import { Features } from '@/components/Features';
import { FreshBites } from '@/components/FreshBites';
import { Testimonials } from '@/components/Testimonials';
import { Blogs } from '@/components/Blogs';
import { Footer } from '@/components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { Landing } from '@/pages/Landing';
import { SignIn } from '@/pages/SignIn';
import { SignUp } from '@/pages/SignUp';
import { Cart } from '@/pages/Cart';
import { Profile } from '@/pages/Profile';
import { EditProfile } from '@/pages/EditProfile';
import { Notifications } from '@/pages/Notifications';
import { Settings } from '@/pages/Settings';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Features />
        <FreshBites />
        <Testimonials />
        <Blogs />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Routes>
            {/* Public Routes */}
            <Route path="/landing" element={<Landing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Protected Routes */}
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/profile/edit" element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            } />
            <Route path="/notifications" element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="/privacy-policy" element={
              <ProtectedRoute>
                <PrivacyPolicy />
              </ProtectedRoute>
            } />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/landing" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;