"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatCurrency, getStatusColor } from "@/lib/utils";
import {
  Package,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Plus,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "248",
    change: "+12",
    trend: "up" as const,
    icon: Package,
  },
  {
    title: "In Stock",
    value: "201",
    change: "+8",
    trend: "up" as const,
    icon: CheckCircle2,
  },
  {
    title: "Low Stock",
    value: "32",
    change: "+5",
    trend: "up" as const,
    icon: AlertTriangle,
  },
  {
    title: "Out of Stock",
    value: "15",
    change: "-2",
    trend: "down" as const,
    icon: XCircle,
  },
];

const products = [
  { name: "Wireless Headphones Pro", sku: "ELEC-001", category: "Electronics", price: 149.99, stock: 124, status: "active" },
  { name: "Smart Watch Ultra", sku: "ELEC-002", category: "Electronics", price: 299.99, stock: 87, status: "active" },
  { name: "Running Shoes Elite", sku: "SPRT-001", category: "Sports", price: 89.99, stock: 215, status: "active" },
  { name: "Organic Cotton T-Shirt", sku: "CLTH-001", category: "Clothing", price: 34.99, stock: 342, status: "active" },
  { name: "LED Desk Lamp", sku: "HOME-001", category: "Home & Garden", price: 64.99, stock: 48, status: "active" },
  { name: "Bluetooth Speaker Mini", sku: "ELEC-003", category: "Electronics", price: 59.99, stock: 0, status: "inactive" },
  { name: "Yoga Mat Premium", sku: "SPRT-002", category: "Sports", price: 44.99, stock: 12, status: "pending" },
  { name: "Ceramic Coffee Mug Set", sku: "HOME-002", category: "Home & Garden", price: 29.99, stock: 186, status: "active" },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Product Catalog</h1>
          <p className="text-sm text-muted-foreground">Manage your product inventory</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
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
        <CardHeader>
          <CardTitle>Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left text-muted-foreground">
                  <th className="pb-3 font-medium">Name</th>
                  <th className="pb-3 font-medium">SKU</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium">Price</th>
                  <th className="pb-3 font-medium">Stock</th>
                  <th className="pb-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.sku} className="border-b last:border-0">
                    <td className="py-3 font-medium">{product.name}</td>
                    <td className="py-3 font-mono text-xs text-muted-foreground">{product.sku}</td>
                    <td className="py-3">{product.category}</td>
                    <td className="py-3">{formatCurrency(product.price)}</td>
                    <td className="py-3">
                      <span
                        className={product.stock === 0 ? "text-red-600" : product.stock < 20 ? "text-amber-600" : ""}
                      >
                        {product.stock}
                      </span>
                    </td>
                    <td className="py-3">
                      <Badge className={getStatusColor(product.status)}>
                        {product.status}
                      </Badge>
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
