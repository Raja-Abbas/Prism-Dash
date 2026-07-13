"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatCurrency, getStatusColor } from "@/lib/utils";
import {
  Globe,
  Users,
  TrendingUp,
  ShoppingCart,
  BarChart3,
  PieChart,
  ArrowUpRight,
  Eye,
} from "lucide-react";

const stats = [
  {
    title: "Page Views",
    value: "1.24M",
    change: "+18.2%",
    icon: Eye,
  },
  {
    title: "Unique Visitors",
    value: "89,420",
    change: "+12.5%",
    icon: Users,
  },
  {
    title: "Bounce Rate",
    value: "32.4%",
    change: "-2.1%",
    icon: TrendingUp,
  },
  {
    title: "Avg Session",
    value: "4m 32s",
    change: "+8.7%",
    icon: BarChart3,
  },
];

const chartCards = [
  {
    title: "Traffic Sources",
    icon: Globe,
    description: "Visitor acquisition channels",
  },
  {
    title: "Conversion Funnel",
    icon: PieChart,
    description: "User journey analysis",
  },
  {
    title: "Revenue by Region",
    icon: BarChart3,
    description: "Geographic revenue distribution",
  },
  {
    title: "Customer Demographics",
    icon: Users,
    description: "Audience composition",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-sm text-muted-foreground">Insights and performance metrics</p>
        </div>
        <Badge variant="outline">Last 30 days</Badge>
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
                  <ArrowUpRight className="h-4 w-4" />
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
        {chartCards.map((chart) => (
          <Card key={chart.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <chart.icon className="h-5 w-5 text-blue-500" />
                {chart.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-64 items-center justify-center rounded-xl bg-blue-500/5">
                <div className="text-center">
                  <chart.icon className="mx-auto h-12 w-12 text-blue-500/40" />
                  <p className="mt-2 text-sm font-medium text-muted-foreground">
                    {chart.description}
                  </p>
                  <p className="text-xs text-muted-foreground">Analytics visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
