"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { APP_NAME } from "@/lib/constants";
import { candidates } from "@/lib/data";
import { LayoutDashboard, Users, FileText, CheckCircle2, ArrowRight, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="border-b bg-background">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg"><Zap className="h-5 w-5 text-primary" /><span>{APP_NAME}</span><Badge variant="secondary" className="ml-2">Demo Mode</Badge></div>
          <div className="flex items-center gap-4">
            <Link href="/"><Button variant="ghost" size="sm">Exit Demo</Button></Link>
            <Link href="/auth/register"><Button size="sm">Get Started</Button></Link>
          </div>
        </div>
      </div>
      <div className="container py-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6"><Sparkles className="h-8 w-8 text-primary" /></div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome to your Demo Workspace</h1>
            <p className="text-muted-foreground mt-4 text-lg">Explore OfferFlow AI with pre-filled sample data. Try the dashboard, review candidates, and preview offer letters.</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard"><Button size="lg" className="gap-2 h-12 px-8 rounded-full"><LayoutDashboard className="h-4 w-4" /> Open Dashboard</Button></Link>
              <Link href="/candidates"><Button size="lg" variant="outline" className="gap-2 h-12 px-8 rounded-full"><Users className="h-4 w-4" /> View Candidates</Button></Link>
            </div>
          </motion.div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <Link href="/dashboard">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4"><LayoutDashboard className="h-5 w-5 text-blue-600 dark:text-blue-300" /></div>
                <h3 className="font-semibold text-lg">HR Dashboard</h3><p className="text-sm text-muted-foreground mt-1">Analytics, charts, and pending tasks</p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">Explore <ArrowRight className="h-4 w-4 ml-1" /></div>
              </CardContent>
            </Link>
          </Card>
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <Link href="/candidates">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4"><Users className="h-5 w-5 text-purple-600 dark:text-purple-300" /></div>
                <h3 className="font-semibold text-lg">Candidate Management</h3><p className="text-sm text-muted-foreground mt-1">Review submissions and track status</p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">Explore <ArrowRight className="h-4 w-4 ml-1" /></div>
              </CardContent>
            </Link>
          </Card>
          <Card className="hover:border-primary/50 transition-colors cursor-pointer">
            <Link href="/settings">
              <CardContent className="pt-6">
                <div className="h-10 w-10 rounded-lg bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4"><FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-300" /></div>
                <h3 className="font-semibold text-lg">Company Settings</h3><p className="text-sm text-muted-foreground mt-1">Templates, users, and branding</p>
                <div className="mt-4 flex items-center text-sm text-primary font-medium">Explore <ArrowRight className="h-4 w-4 ml-1" /></div>
              </CardContent>
            </Link>
          </Card>
        </div>
        <div className="rounded-2xl border bg-card p-8">
          <h2 className="text-xl font-bold mb-6">Sample Candidates</h2>
          <div className="space-y-4">
            {candidates.slice(0, 3).map((c) => (
              <div key={c.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{c.firstName[0]}{c.lastName[0]}</div>
                  <div><p className="font-medium">{c.firstName} {c.lastName}</p><p className="text-sm text-muted-foreground">{c.position} &bull; {c.department}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block w-32"><Progress value={c.status === "accepted" ? 100 : c.status === "offer_sent" ? 85 : c.status === "approval" ? 60 : c.status === "review" ? 40 : 20} className="h-2" /></div>
                  <Badge variant={c.status === "accepted" ? "success" : "secondary"} className="capitalize">{c.status.replace("_", " ")}</Badge>
                  <Link href={`/candidates/${c.id}`}><Button variant="ghost" size="sm">View</Button></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
