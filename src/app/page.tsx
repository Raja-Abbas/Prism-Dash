"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import {
  BarChart3,
  DollarSign,
  Users,
  ShoppingCart,
  Shield,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Monitor your business metrics in real-time with interactive dashboards and customizable widgets.",
  },
  {
    icon: DollarSign,
    title: "Revenue Tracking",
    description: "Track revenue streams, forecast growth, and identify your most profitable products and channels.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description: "Manage customer relationships, track lifecycles, and segment your audience for targeted campaigns.",
  },
  {
    icon: ShoppingCart,
    title: "Order Processing",
    description: "Streamline order management with automated workflows, tracking, and fulfillment integration.",
  },
  {
    icon: ClipboardList,
    title: "Audit Logs",
    description: "Maintain complete visibility with comprehensive audit trails for compliance and security.",
  },
  {
    icon: Shield,
    title: "Role-Based Access",
    description: "Control who sees what with granular permissions, roles, and team management capabilities.",
  },
];

const stats = [
  { value: "$2.4B+", label: "Revenue Tracked" },
  { value: "12M+", label: "Orders Processed" },
  { value: "50K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime" },
];

const trustBadges = [
  "SOC 2 Certified",
  "GDPR Compliant",
  "Enterprise Security",
  "24/7 Support",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo size="sm" />
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex h-9 items-center justify-center rounded-xl px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="inline-flex h-9 items-center justify-center rounded-xl bg-blue-600 px-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600/90"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Enterprise{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Analytics Dashboard
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              The all-in-one platform for tracking revenue, managing customers,
              and gaining actionable insights into your business operations.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600/90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Sign in
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-500" />
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Powerful features designed for modern enterprises
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="transition-shadow hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                    <feature.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-blue-500">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl italic text-muted-foreground">
            &ldquo;Prism Dash transformed how we track and analyze our business data.
            The real-time insights have been invaluable for making informed decisions
            and driving growth.&rdquo;
          </blockquote>
          <div className="mt-6">
            <p className="font-medium">Jessica Park</p>
            <p className="text-sm text-muted-foreground">VP of Operations, TechCorp</p>
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Join thousands of businesses using Prism Dash to make better decisions.
          </p>
          <div className="mt-8">
            <Link
              href="/register"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-blue-600 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600/90"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Logo size="sm" />
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; 2026 Prism Dash, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
