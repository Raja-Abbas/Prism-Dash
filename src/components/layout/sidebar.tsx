"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  LayoutDashboard,
  DollarSign,
  Users,
  ShoppingCart,
  Package,
  BarChart3,
  Bell,
  UserCog,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Overview", href: "/overview", icon: LayoutDashboard },
  { label: "Revenue", href: "/revenue", icon: DollarSign },
  { label: "Customers", href: "/customers", icon: Users },
  { label: "Orders", href: "/orders", icon: ShoppingCart },
  { label: "Products", href: "/products", icon: Package },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
];

const bottomNavItems = [
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Users", href: "/users", icon: UserCog },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const sidebarContent = (
    <div className="flex h-full flex-col bg-card border-r border-border">
      <div className={cn("flex items-center justify-between p-4", collapsed && "justify-center px-2")}>
        {!collapsed && <Logo size="sm" />}
        {collapsed && <Logo size="sm" showText={false} />}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center h-7 w-7 rounded-lg hover:bg-muted transition-colors"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
        <button
          onClick={onClose}
          className="lg:hidden flex items-center justify-center h-7 w-7 rounded-lg hover:bg-muted transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <Separator />

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                active
                  ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed && "justify-center px-2"
              )}
              title={collapsed ? item.label : undefined}
            >
              <Icon className={cn("h-5 w-5 shrink-0", active && "text-blue-600 dark:text-blue-400")} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}

        <div className="pt-2">
          <Separator className="mb-2" />
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  active
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  collapsed && "justify-center px-2"
                )}
                title={collapsed ? item.label : undefined}
              >
                <Icon className={cn("h-5 w-5 shrink-0", active && "text-blue-600 dark:text-blue-400")} />
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </div>
      </nav>

      <Separator />

      <div className={cn("p-3", collapsed && "px-2")}>
        <div className={cn("flex items-center gap-3 rounded-xl p-2", collapsed && "justify-center")}>
          <Avatar
            src={session?.user?.image}
            name={session?.user?.name}
            size="sm"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{session?.user?.name || "User"}</p>
              <p className="text-xs text-muted-foreground truncate">{session?.user?.email}</p>
            </div>
          )}
          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 shrink-0"
              onClick={() => signOut({ callbackUrl: "/login" })}
              title="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col transition-all duration-300",
          collapsed ? "lg:w-[72px]" : "lg:w-[260px]"
        )}
      >
        {sidebarContent}
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={onClose} />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[260px] transform transition-transform duration-300 lg:hidden",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
