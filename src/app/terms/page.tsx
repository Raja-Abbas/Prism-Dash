import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, UserCheck, AlertTriangle, Gavel, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Prism Dash",
  description: "Terms of service for the Prism Dash enterprise analytics platform.",
};

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content:
      "By accessing or using Prism Dash, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We reserve the right to modify these terms at any time.",
  },
  {
    icon: Scale,
    title: "Use License",
    content:
      "We grant you a limited, non-exclusive, non-transferable license to use Prism Dash for your internal business purposes. This license does not include the right to sublicense, redistribute, or create derivative works from our platform.",
  },
  {
    icon: UserCheck,
    title: "User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must provide accurate, current, and complete information during registration and keep your account information up to date.",
  },
  {
    icon: AlertTriangle,
    title: "Limitation of Liability",
    content:
      "To the maximum extent permitted by law, Prism Dash shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.",
  },
  {
    icon: Gavel,
    title: "Governing Law",
    content:
      "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of Wilmington, Delaware.",
  },
  {
    icon: Mail,
    title: "Contact",
    content:
      "For questions about these Terms of Service, please contact us at legal@prismdash.com or write to our corporate office at Prism Dash, Inc., 123 Innovation Drive, Wilmington, DE 19801.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Terms of Service</h1>
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
