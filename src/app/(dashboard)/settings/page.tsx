"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  User,
  Building2,
  Shield,
  Bell,
  Save,
} from "lucide-react";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "workspace", label: "Workspace", icon: Building2 },
  { id: "security", label: "Security", icon: Shield },
  { id: "notifications", label: "Notifications", icon: Bell },
] as const;

type TabId = (typeof tabs)[number]["id"];

interface ToggleProps {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

function Toggle({ label, description, enabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <button
        onClick={() => onChange(!enabled)}
        className={cn(
          "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors",
          enabled ? "bg-blue-500" : "bg-zinc-200"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
            enabled ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="flex gap-1 rounded-xl border bg-muted p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.id
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "profile" && (
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-500/10 text-xl font-bold text-blue-500">
                AU
              </div>
              <div>
                <p className="font-medium">Admin User</p>
                <p className="text-sm text-muted-foreground">admin@prismdash.com</p>
                <p className="mt-1 text-xs text-muted-foreground">Administrator</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input
                  defaultValue="Admin User"
                  className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input
                  defaultValue="admin@prismdash.com"
                  className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <input
                  defaultValue="Administrator"
                  disabled
                  className="h-10 w-full rounded-xl border bg-muted px-3 text-sm text-muted-foreground"
                />
              </div>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      )}

      {activeTab === "workspace" && (
        <Card>
          <CardHeader>
            <CardTitle>Workspace</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Workspace Name</label>
              <input
                defaultValue="Prism Dash"
                className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Workspace Slug</label>
              <input
                defaultValue="prism-dash"
                className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      )}

      {activeTab === "security" && (
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-sm font-medium">Change Password</h3>
            <div className="space-y-2">
              <label className="text-sm font-medium">Current Password</label>
              <input
                type="password"
                className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">New Password</label>
              <input
                type="password"
                className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Confirm New Password</label>
              <input
                type="password"
                className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Update Password
            </Button>
          </CardContent>
        </Card>
      )}

      {activeTab === "notifications" && (
        <Card>
          <CardHeader>
            <CardTitle>Notification Preferences</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Toggle
              label="Email Notifications"
              description="Receive notifications via email"
              enabled={emailNotifications}
              onChange={setEmailNotifications}
            />
            <Toggle
              label="Push Notifications"
              description="Receive push notifications in your browser"
              enabled={pushNotifications}
              onChange={setPushNotifications}
            />
            <Toggle
              label="Weekly Digest"
              description="Receive a weekly summary of activity"
              enabled={weeklyDigest}
              onChange={setWeeklyDigest}
            />
            <Toggle
              label="Marketing Emails"
              description="Receive product updates and offers"
              enabled={marketingEmails}
              onChange={setMarketingEmails}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
