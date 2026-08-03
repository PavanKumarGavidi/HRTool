"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, UserCog, Shield } from "lucide-react";
import { ROUTES } from "@/lib/constants";
export default function DemoLoginPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground mb-4"><Zap className="h-6 w-6" /></div>
        <CardTitle className="text-2xl">Demo Access</CardTitle>
        <CardDescription>Choose a demo role to explore the platform</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Link href={ROUTES.dashboard}><Button variant="outline" className="w-full h-auto py-4 justify-start gap-4"><div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center"><UserCog className="h-5 w-5 text-blue-600 dark:text-blue-300" /></div><div className="text-left"><p className="font-medium">HR Specialist</p><p className="text-xs text-muted-foreground">Review candidates and manage onboarding</p></div></Button></Link>
        <Link href={ROUTES.dashboard}><Button variant="outline" className="w-full h-auto py-4 justify-start gap-4"><div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center"><Shield className="h-5 w-5 text-purple-600 dark:text-purple-300" /></div><div className="text-left"><p className="font-medium">HR Manager</p><p className="text-xs text-muted-foreground">Approve offers and view analytics</p></div></Button></Link>
        <p className="text-center text-sm text-muted-foreground pt-2"><Link href={ROUTES.login} className="text-primary hover:underline">Back to login</Link></p>
      </CardContent>
    </Card>
  );
}
