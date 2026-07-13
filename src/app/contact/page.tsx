"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "support@prismdash.com",
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9am-6pm EST",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Innovation Drive",
    description: "Wilmington, DE 19801",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-muted-foreground">
            Have a question? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                    <info.icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-medium">{info.title}</p>
                    <p className="text-sm text-muted-foreground">{info.details}</p>
                    <p className="text-xs text-muted-foreground">{info.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex h-64 flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10">
                    <Send className="h-8 w-8 text-emerald-500" />
                  </div>
                  <p className="mt-4 text-lg font-medium">Message sent!</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <input
                      required
                      className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input
                      required
                      type="email"
                      className="h-10 w-full rounded-xl border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full rounded-xl border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500/20"
                      placeholder="How can we help?"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
