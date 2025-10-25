import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Activity, 
  LayoutDashboard, 
  Calendar, 
  Users, 
  FileText, 
  Settings, 
  LogOut,
  Menu,
  X,
  Heart,
  Stethoscope,
  UserCog,
  ClipboardList,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';
import { useAuth, UserRole } from '../contexts/AuthContext';
import { Button } from './ui/button';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  path: string;
}

const menuItems: Record<UserRole, MenuItem[]> = {
  patient: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/patient' },
    { icon: Calendar, label: 'Appointments', path: '/dashboard/patient/appointments' },
    { icon: FileText, label: 'Medical Records', path: '/dashboard/patient/records' },
    { icon: Heart, label: 'Health Metrics', path: '/dashboard/patient/metrics' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/patient/messages' },
    { icon: Settings, label: 'Settings', path: '/dashboard/patient/settings' },
  ],
  doctor: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/doctor' },
    { icon: Calendar, label: 'Schedule', path: '/dashboard/doctor/schedule' },
    { icon: Users, label: 'Patients', path: '/dashboard/doctor/patients' },
    { icon: ClipboardList, label: 'Consultations', path: '/dashboard/doctor/consultations' },
    { icon: MessageSquare, label: 'Messages', path: '/dashboard/doctor/messages' },
    { icon: Settings, label: 'Settings', path: '/dashboard/doctor/settings' },
  ],
  admin: [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/admin' },
    { icon: Users, label: 'Users', path: '/dashboard/admin/users' },
    { icon: Stethoscope, label: 'Doctors', path: '/dashboard/admin/doctors' },
    { icon: Calendar, label: 'Appointments', path: '/dashboard/admin/appointments' },
    { icon: FileText, label: 'Reports', path: '/dashboard/admin/reports' },
    { icon: UserCog, label: 'Staff', path: '/dashboard/admin/staff' },
    { icon: Settings, label: 'Settings', path: '/dashboard/admin/settings' },
  ],
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const currentMenuItems = user ? menuItems[user.role] : [];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-sidebar border-r border-sidebar-border z-50 transform transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-sidebar-primary text-sidebar-primary-foreground p-2 rounded-lg">
                <Activity className="h-5 w-5" />
              </div>
              <span className="font-medium text-sidebar-foreground">MediCare</span>
            </Link>
            <button
              className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5 text-sidebar-foreground" />
            </button>
          </div>

          {/* User Info */}
          <div className="p-4 border-b border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-primary text-sidebar-primary-foreground rounded-full flex items-center justify-center">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sidebar-foreground truncate">{user?.name}</p>
                <p className="text-sidebar-accent-foreground capitalize">{user?.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {currentMenuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                          : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-sidebar-border">
            <Button
              variant="outline"
              className="w-full justify-start gap-3"
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="bg-background border-b border-border sticky top-0 z-30">
          <div className="flex items-center justify-between p-4">
            <button
              className="lg:hidden p-2 hover:bg-accent rounded-lg"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="capitalize">
              {location.pathname.split('/').pop()?.replace('-', ' ') || 'Dashboard'}
            </h1>
            <div className="w-10 lg:w-0" />
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
