"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Bell,
  AlertTriangle,
  CheckCircle2,
  Info,
  XCircle,
  CheckCheck,
  Package,
  ShoppingCart,
  UserPlus,
  Shield,
  CreditCard,
  Server,
  Clock,
} from "lucide-react";

interface Notification {
  id: string;
  type: "info" | "warning" | "success" | "error";
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ElementType;
}

const initialNotifications: Notification[] = [
  { id: "1", type: "info", title: "System Update", message: "Platform maintenance scheduled for July 15, 2026 at 2:00 AM UTC.", time: "5m ago", read: false, icon: Server },
  { id: "2", type: "success", title: "Order Completed", message: "Order #ORD-7841 has been successfully delivered to Sarah Chen.", time: "23m ago", read: false, icon: Package },
  { id: "3", type: "warning", title: "Low Stock Alert", message: "Yoga Mat Premium (SPRT-002) has only 12 units remaining.", time: "1h ago", read: false, icon: AlertTriangle },
  { id: "4", type: "success", title: "New Customer", message: "Emily Rodriguez from Design Studio has registered an account.", time: "2h ago", read: true, icon: UserPlus },
  { id: "5", type: "error", title: "Payment Failed", message: "Payment for order #ORD-7836 could not be processed. Please review.", time: "3h ago", read: true, icon: CreditCard },
  { id: "6", type: "info", title: "Security Update", message: "Two-factor authentication is now enabled for all admin accounts.", time: "5h ago", read: true, icon: Shield },
  { id: "7", type: "success", title: "Bulk Import Complete", message: "142 products have been successfully imported into the catalog.", time: "6h ago", read: true, icon: CheckCircle2 },
  { id: "8", type: "warning", title: "High Traffic Detected", message: "Server load is above 85%. Consider scaling resources.", time: "8h ago", read: true, icon: AlertTriangle },
  { id: "9", type: "info", title: "Weekly Report", message: "Your weekly analytics report is ready for review.", time: "1d ago", read: true, icon: Clock },
  { id: "10", type: "error", title: "Export Failed", message: "The monthly revenue export failed due to a timeout. Please retry.", time: "2d ago", read: true, icon: XCircle },
];

const typeColors = {
  info: "bg-blue-500/10 text-blue-500",
  warning: "bg-amber-500/10 text-amber-500",
  success: "bg-emerald-500/10 text-emerald-500",
  error: "bg-red-500/10 text-red-500",
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-sm text-muted-foreground">
            {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up"}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="outline" onClick={markAllRead}>
            <CheckCheck className="mr-2 h-4 w-4" />
            Mark all as read
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="divide-y p-0">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex items-start gap-4 p-4 transition-colors hover:bg-muted/50 ${
                !notification.read ? "bg-blue-500/5" : ""
              }`}
            >
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${typeColors[notification.type]}`}
              >
                <notification.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{notification.title}</p>
                    {!notification.read && (
                      <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {notification.message}
                </p>
              </div>
              {!notification.read && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="shrink-0"
                  onClick={() => markRead(notification.id)}
                >
                  Mark read
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
