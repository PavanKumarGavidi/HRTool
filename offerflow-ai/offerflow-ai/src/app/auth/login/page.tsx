"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { ROUTES } from "@/lib/constants";
export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-4"><Zap className="h-6 w-6" /></div>
        <CardTitle className="text-2xl">Welcome back</CardTitle>
        <CardDescription>Enter your credentials to access your dashboard</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="hr@company.com" /></div>
        <div className="space-y-2"><div className="flex items-center justify-between"><Label htmlFor="password">Password</Label><Link href={ROUTES.forgotPassword} className="text-xs text-primary hover:underline">Forgot password?</Link></div><Input id="password" type="password" /></div>
        <Button className="w-full">Sign In</Button>
        <div className="relative"><div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-card px-2 text-muted-foreground">Or</span></div></div>
        <Link href={ROUTES.demoLogin}><Button variant="outline" className="w-full">Sign in with Demo Account</Button></Link>
        <p className="text-center text-sm text-muted-foreground">Don&apos;t have an account? <Link href={ROUTES.register} className="text-primary hover:underline">Register company</Link></p>
      </CardContent>
    </Card>
  );
}
