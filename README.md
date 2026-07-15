# Prism Dash — Enterprise Analytics & Operations Dashboard

> **Status:** MVP 1 — Feature-complete prototype. All core features implemented and working. Login removed for public testing — all pages freely accessible.

> Premium enterprise dashboard with KPIs, charts, data tables, and role-based access control.

**Live Demo:** [prism-dash-next.netlify.app](https://prism-dash-next.netlify.app)

> **Note:** Authentication has been removed for this MVP to allow free access to all features. No login or signup required.

---

## What It Does

Prism Dash is a full-featured enterprise analytics dashboard providing real-time visibility into revenue, customers, orders, products, and team performance. It includes role-based access (Admin, Manager, Viewer), audit logging, notifications, and interactive data visualizations.

## Key Features

- **Executive Overview** — KPI cards for revenue, orders, customers, conversion rate with chart placeholders
- **Revenue Analytics** — Monthly/quarterly breakdowns, revenue by category, top products
- **Customer Management** — Customer database with status tracking, spending history, search/filter
- **Order Management** — Full order lifecycle with status badges, line items, date tracking
- **Product Catalog** — SKU management, stock levels, category organization
- **Analytics Dashboard** — Traffic, conversion funnels, demographics chart areas
- **Notifications** — Typed notifications (info/warning/success/error) with read/unread state
- **User Management** — Role-based access control (Admin, Manager, Viewer)
- **Audit Logs** — Action tracking with entity, user, IP address, and timestamps
- **Settings** — Profile, workspace, security, notification preferences
- **Split-Screen Auth** — Premium login/register with branded gradient panel

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Database | SQLite + Prisma 7 (`@prisma/adapter-libsql`) |
| Auth | NextAuth.js v5 (JWT + credentials + RBAC) |
| Styling | Tailwind CSS v4 + custom blue/navy design system |
| Data Tables | @tanstack/react-table |
| Charts | Recharts |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans + IBM Plex Mono |
| Notifications | react-hot-toast / sonner |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/raja-abbas-affandi/prism-dash.git
cd prism-dash

# Install dependencies
npm install

# Set up environment
cp .env.example .env

# Push database schema
npx prisma db push

# Generate Prisma client
npx prisma generate

# Seed demo data
npx tsx prisma/seed.ts

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | SQLite file path (default: `file:prisma/dev.db`) |
| `AUTH_SECRET` | Yes | Random string for NextAuth JWT signing |
| `NEXTAUTH_URL` | Yes | App URL (e.g., `http://localhost:3000`) |

## Project Structure

```
prism-dash/
├── prisma/
│   ├── schema.prisma        # Database schema (8 models)
│   ├── seed.ts              # Demo data seeder
│   └── dev.db               # SQLite database
├── src/
│   ├── app/
│   │   ├── (auth)/          # Login, Register, Auth Error
│   │   ├── (dashboard)/     # Overview, Revenue, Customers, Orders, Products, Analytics, Notifications, Users, Settings
│   │   ├── api/             # REST API (auth, register)
│   │   ├── privacy/         # Privacy policy
│   │   ├── terms/           # Terms of service
│   │   └── contact/         # Contact page
│   ├── components/
│   │   ├── ui/              # 9 shadcn/ui components + DataTable
│   │   └── layout/          # Sidebar, Header, Dashboard Layout
│   └── lib/
│       ├── auth.ts          # NextAuth v5 configuration + RBAC
│       ├── prisma.ts        # Prisma client (LibSQL adapter)
│       └── utils.ts         # Shared utilities
├── public/
│   ├── favicon.svg          # Blue gradient bar chart logo
│   └── og-image.svg         # Social share card
├── netlify.toml             # Netlify build config
├── .env.example             # Environment template
└── package.json
```

## Database Schema

- **User** — Auth credentials, role (ADMIN, MANAGER, VIEWER), active status
- **Workspace** — Multi-tenant container
- **WorkspaceMember** — User-workspace association with roles
- **Customer** — Customer profiles with status, spending, order count
- **Product** — SKU, category, price, cost, stock levels
- **Order** — Order lifecycle with status tracking, tax, discounts
- **OrderItem** — Line items linking orders to products
- **Notification** — Typed notifications (info, warning, success, error)
- **AuditLog** — Action tracking with entity, user, IP address

## Design System

- **Primary:** Blue `#2563eb` (light) / `#60a5fa` (dark)
- **Dark Mode:** Deep navy `#0b1120` with blue-tinted surfaces
- **Effects:** Noise texture overlay, glass morphism, gradient text, card shadows
- **Typography:** Plus Jakarta Sans (headings) + IBM Plex Mono (code)
- **Components:** `rounded-xl/2xl`, scale micro-interactions, translucent badge fills

## License

MIT
