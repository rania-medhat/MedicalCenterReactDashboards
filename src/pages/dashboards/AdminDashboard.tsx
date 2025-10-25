import { Users, Stethoscope, Calendar, TrendingUp, DollarSign, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table';
import { Badge } from '../../components/ui/badge';

export function AdminDashboard() {
  const stats = [
    {
      label: 'Total Patients',
      value: '2,543',
      change: '+12%',
      trend: 'up',
      icon: Users,
    },
    {
      label: 'Active Doctors',
      value: '48',
      change: '+3',
      trend: 'up',
      icon: Stethoscope,
    },
    {
      label: 'Appointments Today',
      value: '156',
      change: '-8%',
      trend: 'down',
      icon: Calendar,
    },
    {
      label: 'Revenue (Month)',
      value: '$45,231',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
    },
  ];

  const recentAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      doctor: 'Dr. Sarah Johnson',
      time: '09:00 AM',
      status: 'completed',
      department: 'Cardiology',
    },
    {
      id: 2,
      patient: 'Emily Davis',
      doctor: 'Dr. Michael Chen',
      time: '10:30 AM',
      status: 'in-progress',
      department: 'General',
    },
    {
      id: 3,
      patient: 'Michael Brown',
      doctor: 'Dr. Lisa Anderson',
      time: '11:30 AM',
      status: 'scheduled',
      department: 'Neurology',
    },
    {
      id: 4,
      patient: 'Sarah Wilson',
      doctor: 'Dr. Sarah Johnson',
      time: '02:00 PM',
      status: 'scheduled',
      department: 'Cardiology',
    },
  ];

  const departmentStats = [
    { name: 'Cardiology', patients: 45, doctors: 8, occupancy: '85%' },
    { name: 'Neurology', patients: 32, doctors: 6, occupancy: '72%' },
    { name: 'Pediatrics', patients: 58, doctors: 10, occupancy: '92%' },
    { name: 'Orthopedics', patients: 38, doctors: 7, occupancy: '68%' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-500/10 text-green-500">Completed</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-500/10 text-blue-500">In Progress</Badge>;
      case 'scheduled':
        return <Badge className="bg-gray-500/10 text-gray-500">Scheduled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="mb-2">Admin Dashboard</h2>
        <p className="text-muted-foreground">Overview of hospital operations and management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1">
                {stat.trend === 'up' ? (
                  <ArrowUpRight className="h-4 w-4 text-green-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}
                <span
                  className={`text-xs ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-xs text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Appointments - Takes 2 columns */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Recent Appointments
            </CardTitle>
            <CardDescription>Latest patient appointments across all departments</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Patient</TableHead>
                  <TableHead>Doctor</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentAppointments.map((appointment) => (
                  <TableRow key={appointment.id}>
                    <TableCell>{appointment.patient}</TableCell>
                    <TableCell>{appointment.doctor}</TableCell>
                    <TableCell>{appointment.department}</TableCell>
                    <TableCell>{appointment.time}</TableCell>
                    <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Department Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Departments
            </CardTitle>
            <CardDescription>Department statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4>{dept.name}</h4>
                  <Badge variant="outline">{dept.occupancy}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {dept.patients} patients
                  </span>
                  <span className="flex items-center gap-1">
                    <Stethoscope className="h-4 w-4" />
                    {dept.doctors} doctors
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: dept.occupancy }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Users className="h-5 w-5" />
              <span>Add Patient</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Stethoscope className="h-5 w-5" />
              <span>Add Doctor</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Calendar className="h-5 w-5" />
              <span>Schedule</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <TrendingUp className="h-5 w-5" />
              <span>View Reports</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Activity className="h-5 w-5" />
              <span>Analytics</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="text-sm">All systems operational</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Server Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">347</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
