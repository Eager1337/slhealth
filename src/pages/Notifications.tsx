import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Calendar, Pill, Heart, MessageCircle, CheckCircle, Trash2 } from "lucide-react";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const initialNotifications = [
  {
    id: 1,
    type: "appointment",
    title: "Appointment Reminder",
    message: "You have an appointment with Dr. Kamara tomorrow at 10:00 AM",
    time: "2 hours ago",
    read: false,
    icon: Calendar,
  },
  {
    id: 2,
    type: "medication",
    title: "Medication Time",
    message: "Time to take your Malaria medication",
    time: "4 hours ago",
    read: false,
    icon: Pill,
  },
  {
    id: 3,
    type: "health",
    title: "Health Tip of the Day",
    message: "Drink at least 8 glasses of water daily to stay healthy",
    time: "1 day ago",
    read: true,
    icon: Heart,
  },
  {
    id: 4,
    type: "message",
    title: "New Message",
    message: "Dr. Fatmata has replied to your question",
    time: "2 days ago",
    read: true,
    icon: MessageCircle,
  },
  {
    id: 5,
    type: "appointment",
    title: "Appointment Confirmed",
    message: "Your appointment on Friday has been confirmed",
    time: "3 days ago",
    read: true,
    icon: Calendar,
  },
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen pb-24">
      <Header />
      
      <main className="container px-4 pt-20 page-transition">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold gradient-text">Notifications</h1>
              <p className="text-sm text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
              </p>
            </div>
            {unreadCount > 0 && (
              <Button variant="outline" size="sm" onClick={markAllRead}>
                <CheckCircle className="w-4 h-4 mr-2" />
                Mark All Read
              </Button>
            )}
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6 bg-muted">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="appointments">Appt</TabsTrigger>
              <TabsTrigger value="medication">Meds</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.map((notification, index) => {
                const Icon = notification.icon;
                return (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`glow-card p-4 ${!notification.read ? 'border-l-4 border-l-primary' : ''}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        !notification.read ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <Icon className={`w-5 h-5 ${!notification.read ? 'text-primary' : 'text-muted-foreground'}`} />
                      </div>
                      <div className="flex-1" onClick={() => markAsRead(notification.id)}>
                        <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <Trash2 className="w-4 h-4 text-muted-foreground" />
                      </Button>
                    </div>
                  </motion.div>
                );
              })}
            </TabsContent>

            <TabsContent value="appointments" className="space-y-4">
              {notifications.filter(n => n.type === "appointment").map((notification) => {
                const Icon = notification.icon;
                return (
                  <div key={notification.id} className="glow-card p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="medication" className="space-y-4">
              {notifications.filter(n => n.type === "medication").map((notification) => {
                const Icon = notification.icon;
                return (
                  <div key={notification.id} className="glow-card p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            <TabsContent value="health" className="space-y-4">
              {notifications.filter(n => n.type === "health").map((notification) => {
                const Icon = notification.icon;
                return (
                  <div key={notification.id} className="glow-card p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-health-green/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-health-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{notification.title}</h3>
                        <p className="text-sm text-muted-foreground">{notification.message}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>

          {/* Notification Settings */}
          <section className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
            <div className="glow-card p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive alerts on your device</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Get updates via email</p>
                </div>
                <div className="w-12 h-6 bg-muted rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-muted-foreground rounded-full" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">SMS Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive SMS reminders</p>
                </div>
                <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Notifications;
