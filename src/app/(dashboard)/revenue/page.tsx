"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, getStatusColor } from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Monthly Revenue",
    value: formatCurrency(324500),
    change: "+12.5%",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    title: "Revenue Growth",
    value: "12.5%",
    change: "+2.3%",
    trend: "up" as const,
    icon: TrendingUp,
  },
  {
    title: "Average Order Value",
    value: formatCurrency(147),
    change: "+5.8%",
    trend: "up" as const,
    icon: ShoppingCart,
  },
  {
    title: "Revenue per Customer",
    value: formatCurrency(575),
    change: "-1.2%",
    trend: "down" as const,
    icon: Users,
  },
];

const categories = [
  { name: "Electronics", revenue: formatCurrency(128000), percent: 39 },
  { name: "Clothing", revenue: formatCurrency(84200), percent: 26 },
  { name: "Home & Garden", revenue: formatCurrency(62300), percent: 19 },
  { name: "Sports", revenue: formatCurrency(31500), percent: 10 },
  { name: "Books", revenue: formatCurrency(18500), percent: 6 },
];

const topProducts = [
  { name: "Wireless Headphones Pro", category: "Electronics", revenue: formatCurrency(48200), units: 342, growth: "+18.2%" },
  { name: "Smart Watch Ultra", category: "Electronics", revenue: formatCurrency(36800), units: 215, growth: "+12.4%" },
  { name: "Running Shoes Elite", category: "Sports", revenue: formatCurrency(28400), units: 412, growth: "+8.7%" },
  { name: "Organic Cotton T-Shirt", category: "Clothing", revenue: formatCurrency(22100), units: 628, growth: "+15.1%" },
  { name: "LED Desk Lamp", category: "Home & Garden", revenue: formatCurrency(18900), units: 287, growth: "+6.3%" },
];

export default function RevenuePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Revenue Analytics</h1>
          <p className="text-sm text-muted-foreground">
            January 1, 2026 — July 13, 2026
          </p>
        </div>
        <Badge variant="outline">This Year</Badge>
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

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-500" />
            Revenue Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-72 items-center justify-center rounded-xl bg-blue-500/5">
            <div className="text-center">
              <BarChart3 className="mx-auto h-12 w-12 text-blue-500/40" />
              <p className="mt-2 text-sm text-muted-foreground">Analytics visualization</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue by Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {categories.map((cat) => (
              <div key={cat.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{cat.name}</span>
                  <span className="text-muted-foreground">{cat.revenue}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-blue-500/10">
                  <div
                    className="h-full rounded-full bg-blue-500"
                    style={{ width: `${cat.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between rounded-xl border p-4"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue}</p>
                    <p className="text-sm text-emerald-600">{product.growth}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
