"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate, getStatusColor } from "@/lib/utils";
import {
  ShoppingCart,
  Clock,
  Loader2,
  CheckCircle2,
  Search,
  Filter,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "8,432",
    change: "+8.2%",
    trend: "up" as const,
    icon: ShoppingCart,
  },
  {
    title: "Pending",
    value: "124",
    change: "+12.1%",
    trend: "up" as const,
    icon: Clock,
  },
  {
    title: "Processing",
    value: "89",
    change: "-3.4%",
    trend: "down" as const,
    icon: Loader2,
  },
  {
    title: "Delivered",
    value: "7,841",
    change: "+9.8%",
    trend: "up" as const,
    icon: CheckCircle2,
  },
];

const orders = [
  { id: "ORD-7841", customer: "Sarah Chen", status: "delivered", items: 3, total: 2450, date: "2026-07-12" },
  { id: "ORD-7840", customer: "Marcus Johnson", status: "processing", items: 1, total: 1890, date: "2026-07-12" },
  { id: "ORD-7839", customer: "Emily Rodriguez", status: "pending", items: 5, total: 3200, date: "2026-07-11" },
  { id: "ORD-7838", customer: "David Kim", status: "shipped", items: 2, total: 875, date: "2026-07-11" },
  { id: "ORD-7837", customer: "Lisa Thompson", status: "delivered", items: 4, total: 4100, date: "2026-07-10" },
  { id: "ORD-7836", customer: "James Wilson", status: "cancelled", items: 1, total: 320, date: "2026-07-10" },
  { id: "ORD-7835", customer: "Priya Patel", status: "delivered", items: 2, total: 1540, date: "2026-07-09" },
  { id: "ORD-7834", customer: "Robert Brown", status: "processing", items: 3, total: 2100, date: "2026-07-09" },
  { id: "ORD-7833", customer: "Anna Martinez", status: "pending", items: 6, total: 5680, date: "2026-07-08" },
  { id: "ORD-7832", customer: "Tom Anderson", status: "delivered", items: 1, total: 450, date: "2026-07-08" },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");

  const filtered = orders.filter(
    (o) =>
      o.id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Order Management</h1>
          <p className="text-sm text-muted-foreground">Track and manage all orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>
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
                  <TrendingUp className={`h-4 w-4 ${stat.trend === "down" ? "rotate-180" : ""}`} />
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
          <CardTitle>Orders</CardTitle>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Search orders..."
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
                  <th className="pb-3 font-medium">Order #</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Total</th>
                  <th className="pb-3 font-medium">Date</th>
                  <th className="pb-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((order) => (
                  <tr key={order.id} className="border-b last:border-0">
                    <td className="py-3 font-medium">{order.id}</td>
                    <td className="py-3">{order.customer}</td>
                    <td className="py-3">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </td>
                    <td className="py-3">{order.items}</td>
                    <td className="py-3 font-medium">{formatCurrency(order.total)}</td>
                    <td className="py-3 text-muted-foreground">{formatDate(order.date)}</td>
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
