"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { ROUTES } from "@/lib/constants";
export default function ForgotPasswordPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-4"><Zap className="h-6 w-6" /></div>
        <CardTitle className="text-2xl">Reset password</CardTitle>
        <CardDescription>Enter your email and we&apos;ll send you a reset link</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="hr@company.com" /></div>
        <Button className="w-full">Send Reset Link</Button>
        <p className="text-center text-sm text-muted-foreground">Remember your password? <Link href={ROUTES.login} className="text-primary hover:underline">Sign in</Link></p>
      </CardContent>
    </Card>
  );
}
