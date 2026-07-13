"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils";
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  BarChart3,
  LineChart,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: formatCurrency(1240000),
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "8,432",
    change: "+8.2%",
    trend: "up" as const,
    icon: ShoppingCart,
  },
  {
    title: "Active Customers",
    value: "2,156",
    change: "+3.1%",
    trend: "up" as const,
    icon: Users,
  },
  {
    title: "Conversion Rate",
    value: "3.42%",
    change: "-0.4%",
    trend: "down" as const,
    icon: TrendingUp,
  },
];

const recentOrders = [
  { id: "ORD-7841", customer: "Sarah Chen", amount: 2450, status: "delivered", date: "2026-07-12" },
  { id: "ORD-7840", customer: "Marcus Johnson", amount: 1890, status: "processing", date: "2026-07-12" },
  { id: "ORD-7839", customer: "Emily Rodriguez", amount: 3200, status: "pending", date: "2026-07-11" },
  { id: "ORD-7838", customer: "David Kim", amount: 875, status: "shipped", date: "2026-07-11" },
  { id: "ORD-7837", customer: "Lisa Thompson", amount: 4100, status: "delivered", date: "2026-07-10" },
];

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">
        <h1 className="text-2xl font-bold">Enterprise Dashboard</h1>
        <p className="mt-1 text-blue-100">Welcome back, Admin</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                  <stat.icon className="h-6 w-6 text-blue-500" />
                </div>
                <span
                  className={`flex items-center gap-1 text-sm font-medium ${
                    stat.trend === "up" ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
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

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5 text-blue-500" />
              Revenue Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-xl bg-blue-500/5">
              <div className="text-center">
                <LineChart className="mx-auto h-12 w-12 text-blue-500/40" />
                <p className="mt-2 text-sm text-muted-foreground">Analytics visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Orders by Month
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex h-64 items-center justify-center rounded-xl bg-blue-500/5">
              <div className="text-center">
                <BarChart3 className="mx-auto h-12 w-12 text-blue-500/40" />
                <p className="mt-2 text-sm text-muted-foreground">Analytics visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Orders</CardTitle>
          <Badge variant="outline">Last 7 days</Badge>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Order</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">{formatCurrency(order.amount)}</td>
                    <td className="py-3">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="py-3 text-muted-foreground">{formatDate(order.date)}</td>
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
