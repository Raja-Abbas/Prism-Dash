"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils";
import {
  Users,
  UserCheck,
  UserPlus,
  DollarSign,
  Search,
  Plus,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Customers",
    value: "2,156",
    change: "+3.1%",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Active",
    value: "1,842",
    change: "+4.2%",
    trend: "up" as const,
    icon: UserCheck,
  },
  {
    title: "Leads",
    value: "314",
    change: "+8.7%",
    trend: "up" as const,
    icon: UserPlus,
  },
  {
    title: "Avg Lifetime Value",
    value: formatCurrency(2890),
    change: "+6.3%",
    trend: "up" as const,
    icon: DollarSign,
  },
];

const customers = [
  { name: "Sarah Chen", email: "sarah.chen@techcorp.com", company: "TechCorp", status: "active", orders: 24, spent: formatCurrency(18400), created: "2025-03-15" },
  { name: "Marcus Johnson", email: "m.johnson@greenlife.com", company: "GreenLife Inc", status: "active", orders: 18, spent: formatCurrency(12300), created: "2025-05-22" },
  { name: "Emily Rodriguez", email: "emily.r@designstudio.io", company: "Design Studio", status: "lead", orders: 0, spent: formatCurrency(0), created: "2026-06-01" },
  { name: "David Kim", email: "david@startupxyz.com", company: "StartupXYZ", status: "active", orders: 31, spent: formatCurrency(24100), created: "2024-11-08" },
  { name: "Lisa Thompson", email: "lisa@globalmfg.com", company: "Global MFG", status: "active", orders: 12, spent: formatCurrency(8750), created: "2025-09-14" },
  { name: "James Wilson", email: "jwilson@financeplus.com", company: "Finance Plus", status: "inactive", orders: 5, spent: formatCurrency(3200), created: "2025-01-20" },
  { name: "Priya Patel", email: "priya@cloudnine.io", company: "CloudNine", status: "active", orders: 22, spent: formatCurrency(15600), created: "2025-07-03" },
  { name: "Robert Brown", email: "rbrown@mediapro.com", company: "MediaPro", status: "lead", orders: 0, spent: formatCurrency(0), created: "2026-06-28" },
  { name: "Anna Martinez", email: "anna@retailhub.com", company: "RetailHub", status: "active", orders: 16, spent: formatCurrency(11200), created: "2025-04-19" },
  { name: "Tom Anderson", email: "tom@buildright.com", company: "BuildRight", status: "active", orders: 9, spent: formatCurrency(6800), created: "2026-01-11" },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Customer Management</h1>
          <p className="text-sm text-muted-foreground">Manage your customer relationships</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <stat.icon className="h-6 w-6 text-blue-500" />
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-emerald-600">
                  <TrendingUp className="h-4 w-4" />
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Customers</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 rounded-xl border bg-background pl-9 pr-4 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">Email</th>
                  <th className="pb-3 font-medium">Company</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Orders</th>
                  <th className="pb-3 font-medium">Total Spent</th>
                  <th className="pb-3 font-medium">Created</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((customer) => (
                  <tr key={customer.email} className="border-b last:border-0">
                    <td className="py-3 font-medium">{customer.name}</td>
                    <td className="py-3 text-muted-foreground">{customer.email}</td>
                    <td className="py-3">{customer.company}</td>
                    <td className="py-3">
                      <Badge className={getStatusColor(customer.status)}>
                        {customer.status}
                      </Badge>
                    </td>
                    <td className="py-3">{customer.orders}</td>
                    <td className="py-3">{customer.spent}</td>
                    <td className="py-3 text-muted-foreground">{formatDate(customer.created)}</td>
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
