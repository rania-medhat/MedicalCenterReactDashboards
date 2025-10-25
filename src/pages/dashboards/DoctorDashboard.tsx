import { Calendar, Users, Clock, TrendingUp, CheckCircle2, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Avatar, AvatarFallback } from '../../components/ui/avatar';

export function DoctorDashboard() {
  const stats = [
    { label: 'Today\'s Patients', value: '12', icon: Users, trend: '+2 from yesterday' },
    { label: 'Pending Appointments', value: '8', icon: Calendar, trend: '4 confirmed' },
    { label: 'Avg. Consultation', value: '25min', icon: Clock, trend: '-5min this week' },
    { label: 'Satisfaction Rate', value: '98%', icon: TrendingUp, trend: '+2% this month' },
  ];

  const todaysSchedule = [
    {
      id: 1,
      patient: 'John Smith',
      time: '09:00 AM',
      type: 'Check-up',
      status: 'completed',
    },
    {
      id: 2,
      patient: 'Emily Davis',
      time: '10:30 AM',
      type: 'Follow-up',
      status: 'in-progress',
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '11:30 AM',
      type: 'Consultation',
      status: 'scheduled',
    },
    {
      id: 4,
      patient: 'Sarah Wilson',
      time: '02:00 PM',
      type: 'Check-up',
      status: 'scheduled',
    },
  ];

  const recentPatients = [
    { id: 1, name: 'John Smith', lastVisit: '2 days ago', condition: 'Hypertension' },
    { id: 2, name: 'Emily Davis', lastVisit: '1 week ago', condition: 'Diabetes' },
    { id: 3, name: 'Michael Brown', lastVisit: '2 weeks ago', condition: 'Asthma' },
    { id: 4, name: 'Sarah Wilson', lastVisit: '3 weeks ago', condition: 'Migraine' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/10 text-green-500';
      case 'in-progress':
        return 'bg-blue-500/10 text-blue-500';
      default:
        return 'bg-gray-500/10 text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="mb-2">Good morning, Doctor!</h2>
        <p className="text-muted-foreground">You have 8 appointments scheduled for today</p>
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
              <p className="text-xs text-muted-foreground mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your appointments for October 24, 2025</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {todaysSchedule.map((appointment) => (
              <div
                key={appointment.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{appointment.patient.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="mb-1">{appointment.patient}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-3 w-3" />
                      <span className="text-muted-foreground">{appointment.time}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{appointment.type}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getStatusColor(appointment.status)}>
                  {appointment.status === 'in-progress' ? (
                    <span className="flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" />
                      In Progress
                    </span>
                  ) : appointment.status === 'completed' ? (
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" />
                      Completed
                    </span>
                  ) : (
                    'Scheduled'
                  )}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Patients */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Recent Patients
            </CardTitle>
            <CardDescription>Patients you've recently consulted</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentPatients.map((patient) => (
              <div
                key={patient.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="mb-1">{patient.name}</h4>
                    <p className="text-muted-foreground">{patient.condition}</p>
                    <p className="text-muted-foreground">Last visit: {patient.lastVisit}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              View All Patients
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Calendar className="h-5 w-5" />
              <span>Add Appointment</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <Users className="h-5 w-5" />
              <span>New Patient</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Write Prescription</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex-col gap-2">
              <AlertCircle className="h-5 w-5" />
              <span>Medical Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
