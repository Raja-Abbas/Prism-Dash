import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

const adapter = new PrismaLibSql({ url: "file:prisma/dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding Prism Dash...");

  const passwordHash = await bcrypt.hash("password123", 12);

  const admin = await prisma.user.create({
    data: { email: "admin@prismdash.com", name: "Admin User", passwordHash, role: "ADMIN" },
  });

  const manager = await prisma.user.create({
    data: { email: "manager@prismdash.com", name: "Sarah Manager", passwordHash, role: "MANAGER" },
  });

  const viewer = await prisma.user.create({
    data: { email: "viewer@prismdash.com", name: "John Viewer", passwordHash, role: "VIEWER" },
  });

  const workspace = await prisma.workspace.create({
    data: { name: "Prism Analytics", slug: "prism-analytics" },
  });

  await prisma.workspaceMember.createMany({
    data: [
      { userId: admin.id, workspaceId: workspace.id, role: "OWNER" },
      { userId: manager.id, workspaceId: workspace.id, role: "ADMIN" },
      { userId: viewer.id, workspaceId: workspace.id, role: "MEMBER" },
    ],
  });

  // Customers
  const customers = await Promise.all([
    prisma.customer.create({ data: { name: "Acme Corp", email: "billing@acmecorp.com", company: "Acme Corp", status: "active", totalSpent: 45200, orderCount: 23, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "TechStart Inc", email: "hello@techstart.io", company: "TechStart Inc", status: "active", totalSpent: 32100, orderCount: 15, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "Global Dynamics", email: "orders@globaldyn.com", company: "Global Dynamics", status: "active", totalSpent: 89400, orderCount: 42, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "Nexus Solutions", email: "contact@nexussol.com", company: "Nexus Solutions", status: "lead", totalSpent: 0, orderCount: 0, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "Pinnacle Labs", email: "finance@pinnaclemabs.com", company: "Pinnacle Labs", status: "active", totalSpent: 67800, orderCount: 31, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "Vertex Holdings", email: "ap@vertexholdings.com", company: "Vertex Holdings", status: "inactive", totalSpent: 12400, orderCount: 5, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "Summit Partners", email: "team@summitpartners.co", company: "Summit Partners", status: "active", totalSpent: 54300, orderCount: 28, workspaceId: workspace.id } }),
    prisma.customer.create({ data: { name: "Horizon Media", email: "hello@horizonmedia.com", company: "Horizon Media", status: "active", totalSpent: 28700, orderCount: 12, workspaceId: workspace.id } }),
  ]);

  // Products
  const products = await Promise.all([
    prisma.product.create({ data: { name: "Enterprise Suite", sku: "ENT-001", category: "Software", price: 2999, cost: 800, stock: 999, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "Pro Analytics", sku: "PA-002", category: "Analytics", price: 799, cost: 200, stock: 999, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "Starter Plan", sku: "ST-003", category: "Subscription", price: 49, cost: 5, stock: 999, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "API Access", sku: "API-004", category: "Integration", price: 199, cost: 30, stock: 999, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "Data Connector", sku: "DC-005", category: "Integration", price: 349, cost: 75, stock: 150, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "Custom Dashboard", sku: "CD-006", category: "Services", price: 4999, cost: 1500, stock: 50, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "Security Add-on", sku: "SEC-007", category: "Security", price: 299, cost: 50, stock: 999, workspaceId: workspace.id } }),
    prisma.product.create({ data: { name: "Training Session", sku: "TR-008", category: "Services", price: 599, cost: 100, stock: 30, workspaceId: workspace.id } }),
  ]);

  // Orders
  const statuses = ["pending", "processing", "shipped", "delivered", "cancelled"];
  for (let i = 1; i <= 20; i++) {
    const customer = customers[i % customers.length];
    const product = products[i % products.length];
    const qty = Math.floor(Math.random() * 5) + 1;
    const total = product.price * qty;

    await prisma.order.create({
      data: {
        orderNumber: `ORD-${String(i).padStart(5, "0")}`,
        status: statuses[i % statuses.length],
        total,
        tax: total * 0.08,
        customerId: customer.id,
        userId: admin.id,
        workspaceId: workspace.id,
        items: {
          create: { quantity: qty, unitPrice: product.price, total, productId: product.id },
        },
      },
    });
  }

  // Notifications
  const notifTypes = ["info", "warning", "success", "error"] as const;
  const notifs = [
    { title: "New order received", message: "ORD-00021 from Acme Corp", type: "info" as const },
    { title: "Payment failed", message: "Order ORD-00015 payment declined", type: "error" as const },
    { title: "Low stock alert", message: "Custom Dashboard has only 50 units left", type: "warning" as const },
    { title: "Monthly report ready", message: "June 2026 analytics report is available", type: "success" as const },
    { title: "New customer signup", message: "Nexus Solutions registered as a lead", type: "info" as const },
    { title: "Invoice overdue", message: "Invoice INV-0089 is 15 days overdue", type: "error" as const },
    { title: "System update", message: "Platform maintenance scheduled for Sunday", type: "info" as const },
    { title: "Revenue milestone", message: "Monthly revenue exceeded $100K target", type: "success" as const },
  ];

  for (const n of notifs) {
    await prisma.notification.create({
      data: { ...n, userId: admin.id },
    });
  }

  // Audit logs
  const actions = ["created", "updated", "deleted", "viewed"];
  const entities = ["Order", "Customer", "Product", "User"];
  for (let i = 0; i < 15; i++) {
    await prisma.auditLog.create({
      data: {
        action: actions[i % actions.length],
        entity: entities[i % entities.length],
        entityId: `entity-${i}`,
        details: `${actions[i % actions.length]} ${entities[i % entities.length]} #${i}`,
        userId: admin.id,
        ipAddress: "192.168.1." + (i + 1),
      },
    });
  }

  console.log("Seed complete:");
  console.log("  admin@prismdash.com / password123 (ADMIN)");
  console.log("  manager@prismdash.com / password123 (MANAGER)");
  console.log("  viewer@prismdash.com / password123 (VIEWER)");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => { console.error(e); prisma.$disconnect(); process.exit(1); });
