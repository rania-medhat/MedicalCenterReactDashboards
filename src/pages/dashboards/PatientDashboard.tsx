import { Calendar, Clock, Heart, Activity, AlertCircle, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export function PatientDashboard() {
  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      date: 'Oct 28, 2025',
      time: '10:00 AM',
      type: 'Check-up',
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'General Physician',
      date: 'Nov 02, 2025',
      time: '2:30 PM',
      type: 'Follow-up',
    },
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'normal', icon: Heart },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', icon: Activity },
    { label: 'Temperature', value: '98.6°F', status: 'normal', icon: Activity },
  ];

  const recentRecords = [
    { id: 1, title: 'Blood Test Results', date: 'Oct 20, 2025', doctor: 'Dr. Sarah Johnson' },
    { id: 2, title: 'X-Ray Report', date: 'Oct 15, 2025', doctor: 'Dr. Michael Chen' },
    { id: 3, title: 'Prescription', date: 'Oct 10, 2025', doctor: 'Dr. Sarah Johnson' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="mb-2">Welcome back!</h2>
        <p className="text-muted-foreground">Here's an overview of your health dashboard</p>
      </div>

      {/* Health Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        {healthMetrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{metric.label}</CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <Badge variant="outline" className="mt-2">
                {metric.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Appointments
            </CardTitle>
            <CardDescription>Your scheduled consultations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-start justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex-1">
                  <h4 className="mb-1">{appointment.doctor}</h4>
                  <p className="text-muted-foreground mb-2">{appointment.specialty}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {appointment.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {appointment.time}
                    </span>
                  </div>
                </div>
                <Badge>{appointment.type}</Badge>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              Book New Appointment
            </Button>
          </CardContent>
        </Card>

        {/* Recent Medical Records */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Recent Medical Records
            </CardTitle>
            <CardDescription>Your latest medical documents</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentRecords.map((record) => (
              <div
                key={record.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1">{record.title}</h4>
                    <p className="text-muted-foreground">{record.doctor}</p>
                    <p className="text-muted-foreground">{record.date}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Records
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Health Tips */}
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-primary" />
            Health Tip of the Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Stay hydrated! Aim to drink at least 8 glasses of water per day to maintain optimal health and well-being.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
