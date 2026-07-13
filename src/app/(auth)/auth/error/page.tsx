"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function ErrorContent() {
  const searchParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const error = searchParams.get("error");

  const errorMessages: Record<string, string> = {
    Configuration: "There is a problem with the server configuration.",
    AccessDenied: "You do not have permission to sign in.",
    Verification: "The verification link may have expired or already been used.",
    Default: "An unexpected error occurred.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-[400px]">
        <CardContent className="pt-6 space-y-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-500/10">
            <AlertTriangle className="h-7 w-7 text-red-600 dark:text-red-400" />
          </div>
          <div className="space-y-2">
            <h1 className="text-xl font-bold">Authentication Error</h1>
            <p className="text-sm text-muted-foreground">
              {errorMessages[error || ""] || errorMessages.Default}
            </p>
          </div>
          <Link href="/login" className="w-full">
            <Button className="w-full">Back to Login</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <span className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </div>
      }
    >
      <ErrorContent />
    </Suspense>
  );
}
