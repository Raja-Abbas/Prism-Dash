"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatDate, getStatusColor } from "@/lib/utils";
import {
  Users,
  Plus,
  MoreHorizontal,
  Shield,
  TrendingUp,
} from "lucide-react";

const users = [
  { name: "Admin User", email: "admin@prismdash.com", role: "admin", status: "active", lastActive: "2026-07-13" },
  { name: "Jessica Park", email: "jessica@prismdash.com", role: "manager", status: "active", lastActive: "2026-07-13" },
  { name: "Michael Torres", email: "michael@prismdash.com", role: "manager", status: "active", lastActive: "2026-07-12" },
  { name: "Sarah Chen", email: "sarah@prismdash.com", role: "viewer", status: "active", lastActive: "2026-07-12" },
  { name: "David Kim", email: "david@prismdash.com", role: "viewer", status: "inactive", lastActive: "2026-06-28" },
  { name: "Emily Rodriguez", email: "emily@prismdash.com", role: "admin", status: "active", lastActive: "2026-07-11" },
  { name: "Marcus Johnson", email: "marcus@prismdash.com", role: "viewer", status: "active", lastActive: "2026-07-10" },
  { name: "Priya Patel", email: "priya@prismdash.com", role: "manager", status: "active", lastActive: "2026-07-09" },
];

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">User Management</h1>
          <p className="text-sm text-muted-foreground">Manage team members and permissions</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Invite User
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{users.length}</p>
              <p className="text-sm text-muted-foreground">Total Users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
              <Shield className="h-6 w-6 text-blue-500" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{users.filter((u) => u.role === "admin").length}</p>
              <p className="text-sm text-muted-foreground">Admins</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <TrendingUp className="h-6 w-6 text-emerald-500" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{users.filter((u) => u.status === "active").length}</p>
              <p className="text-sm text-muted-foreground">Active</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10">
              <Users className="h-6 w-6 text-amber-500" />
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold">{users.filter((u) => u.status === "inactive").length}</p>
              <p className="text-sm text-muted-foreground">Inactive</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Email</th>
                  <th className="pb-3 font-medium">Role</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Last Active</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.email} className="border-b last:border-0">
                    <td className="py-3 font-medium">{user.name}</td>
                    <td className="py-3 text-muted-foreground">{user.email}</td>
                    <td className="py-3">
                      <Badge className={getStatusColor(user.role)}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="py-3">
                      <Badge className={getStatusColor(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-muted-foreground">{formatDate(user.lastActive)}</td>
                    <td className="py-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
