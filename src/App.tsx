import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ProtectedRoute } from './components/ProtectedRoute';
import { DashboardLayout } from './components/DashboardLayout';
import { PatientDashboard } from './pages/dashboards/PatientDashboard';
import { DoctorDashboard } from './pages/dashboards/DoctorDashboard';
import { AdminDashboard } from './pages/dashboards/AdminDashboard';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes with Header and Footer */}
          <Route
            path="/"
            element={
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-1">
                  <HomePage />
                </main>
                <Footer />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard/patient"
            element={
              <ProtectedRoute allowedRoles={['patient']}>
                <DashboardLayout>
                  <PatientDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/patient/:section"
            element={
              <ProtectedRoute allowedRoles={['patient']}>
                <DashboardLayout>
                  <div className="text-center py-12">
                    <h2 className="mb-4">Feature Coming Soon</h2>
                    <p className="text-muted-foreground">
                      This section is currently under development.
                    </p>
                  </div>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/doctor"
            element={
              <ProtectedRoute allowedRoles={['doctor']}>
                <DashboardLayout>
                  <DoctorDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/doctor/:section"
            element={
              <ProtectedRoute allowedRoles={['doctor']}>
                <DashboardLayout>
                  <div className="text-center py-12">
                    <h2 className="mb-4">Feature Coming Soon</h2>
                    <p className="text-muted-foreground">
                      This section is currently under development.
                    </p>
                  </div>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <DashboardLayout>
                  <AdminDashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/admin/:section"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <DashboardLayout>
                  <div className="text-center py-12">
                    <h2 className="mb-4">Feature Coming Soon</h2>
                    <p className="text-muted-foreground">
                      This section is currently under development.
                    </p>
                  </div>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Fallback Route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
}
