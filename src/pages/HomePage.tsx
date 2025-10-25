import { ArrowRight, Heart, Clock, Award, Users, Calendar, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Expert heart care with state-of-the-art technology and experienced cardiologists.',
    },
    {
      icon: Users,
      title: 'Pediatrics',
      description: 'Comprehensive healthcare for children from infancy through adolescence.',
    },
    {
      icon: Shield,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and expert critical care.',
    },
    {
      icon: Calendar,
      title: 'Laboratory Services',
      description: 'Advanced diagnostic testing with accurate and timely results.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Expert Doctors' },
    { value: '10K+', label: 'Happy Patients' },
    { value: '25+', label: 'Years Experience' },
    { value: '15+', label: 'Departments' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Award className="h-4 w-4 text-primary" />
                <span className="text-primary">Trusted Healthcare Provider</span>
              </div>
              <h1 className="mb-6">Your Health is Our Priority</h1>
              <p className="text-muted-foreground mb-8 max-w-lg">
                Experience world-class medical care with our team of expert physicians and cutting-edge technology. 
                We're committed to providing compassionate, comprehensive healthcare services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register">
                  <Button size="lg" className="gap-2">
                    Book Appointment
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <a href="#services">
                  <Button size="lg" variant="outline">
                    Our Services
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" />
                  <span>Top Rated Care</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1728474372689-c3072b79806e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdG9yJTIwaG9zcGl0YWx8ZW58MXx8fHwxNzYxMzA2MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Medical professionals"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-border">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">10,000+</div>
                    <div className="text-muted-foreground">Satisfied Patients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2">{stat.value}</div>
                <div className="opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Medical Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive healthcare services across multiple specialties with state-of-the-art facilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1719934398679-d764c1410770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MTMwMTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern hospital building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-6">Why Choose MediCare Center?</h2>
              <p className="text-muted-foreground mb-6">
                With over 25 years of excellence in healthcare, we combine medical expertise with compassionate care 
                to deliver the best outcomes for our patients.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4>Expert Medical Team</h4>
                    <p className="text-muted-foreground">
                      Board-certified physicians with years of specialized experience
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4>Advanced Technology</h4>
                    <p className="text-muted-foreground">
                      State-of-the-art medical equipment and facilities
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg h-fit">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4>Patient-Centered Care</h4>
                    <p className="text-muted-foreground">
                      Personalized treatment plans tailored to your unique needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions or need to schedule an appointment? We're here to help.
              </p>
              <div className="aspect-video rounded-xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzYxMzA1ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Medical team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
