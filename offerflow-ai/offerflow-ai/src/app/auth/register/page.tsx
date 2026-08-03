"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { ROUTES } from "@/lib/constants";
export default function RegisterPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-4"><Zap className="h-6 w-6" /></div>
        <CardTitle className="text-2xl">Create your account</CardTitle>
        <CardDescription>Start automating your offer workflow today</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4"><div className="space-y-2"><Label htmlFor="firstName">First name</Label><Input id="firstName" placeholder="Jane" /></div><div className="space-y-2"><Label htmlFor="lastName">Last name</Label><Input id="lastName" placeholder="Doe" /></div></div>
        <div className="space-y-2"><Label htmlFor="company">Company name</Label><Input id="company" placeholder="Acme Inc." /></div>
        <div className="space-y-2"><Label htmlFor="email">Work email</Label><Input id="email" type="email" placeholder="jane@company.com" /></div>
        <div className="space-y-2"><Label htmlFor="password">Password</Label><Input id="password" type="password" /></div>
        <Button className="w-full">Create Account</Button>
        <p className="text-center text-sm text-muted-foreground">Already have an account? <Link href={ROUTES.login} className="text-primary hover:underline">Sign in</Link></p>
      </CardContent>
    </Card>
  );
}
