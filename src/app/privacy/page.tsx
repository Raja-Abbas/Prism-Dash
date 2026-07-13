import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Database, Cookie, Users, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Prism Dash",
  description: "Privacy policy for Prism Dash enterprise analytics platform.",
};

const sections = [
  {
    icon: Database,
    title: "Data Collection",
    content:
      "We collect information you provide directly, such as account details, payment information, and communications with us. We also automatically collect usage data including device information, browsing activity, and interaction patterns within the platform.",
  },
  {
    icon: Eye,
    title: "Data Usage",
    content:
      "Your data is used to provide, maintain, and improve our services. We use analytics data to understand usage patterns, personalize your experience, and develop new features. We do not sell your personal information to third parties.",
  },
  {
    icon: Shield,
    title: "Data Storage",
    content:
      "We implement industry-standard security measures including encryption at rest and in transit, regular security audits, and access controls. Data is stored in secure, SOC 2 compliant data centers with redundant backups.",
  },
  {
    icon: Cookie,
    title: "Cookies",
    content:
      "We use essential cookies for platform functionality, analytics cookies to understand usage patterns, and preference cookies to remember your settings. You can manage cookie preferences through your browser settings.",
  },
  {
    icon: Users,
    title: "Third Parties",
    content:
      "We may share data with trusted service providers who assist in operating our platform, subject to strict data protection agreements. These include cloud hosting providers, payment processors, and analytics services.",
  },
  {
    icon: Mail,
    title: "Contact",
    content:
      "For questions about this privacy policy or our data practices, contact our Data Protection Officer at privacy@prismdash.com or write to our corporate address.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="mt-2 text-muted-foreground">Last updated: July 13, 2026</p>
        </div>

        <div className="mt-12 space-y-6">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
                    <section.icon className="h-5 w-5 text-blue-500" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
