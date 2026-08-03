"use client";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { candidates, activities, chartData, departmentData } from "@/lib/data";
import { formatDate } from "@/lib/utils";
import { Users, UserPlus, FileCheck, Clock, FileText, CheckCircle2, ArrowRight, TrendingUp, AlertCircle } from "lucide-react";
import Link from "next/link";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { motion } from "framer-motion";

const stats = [
  { label: "Total Candidates", value: candidates.length, icon: Users, color: "text-blue-600", bg: "bg-blue-100 dark:bg-blue-900" },
  { label: "Pending Registrations", value: candidates.filter((c) => c.status === "onboarding").length, icon: UserPlus, color: "text-amber-600", bg: "bg-amber-100 dark:bg-amber-900" },
  { label: "Pending Reviews", value: candidates.filter((c) => c.status === "review").length, icon: FileCheck, color: "text-purple-600", bg: "bg-purple-100 dark:bg-purple-900" },
  { label: "Pending Approvals", value: candidates.filter((c) => c.status === "approval").length, icon: Clock, color: "text-orange-600", bg: "bg-orange-100 dark:bg-orange-900" },
  { label: "Offers Generated", value: candidates.filter((c) => c.offerStatus === "generated" || c.offerStatus === "sent" || c.offerStatus === "accepted").length, icon: FileText, color: "text-indigo-600", bg: "bg-indigo-100 dark:bg-indigo-900" },
  { label: "Offers Accepted", value: candidates.filter((c) => c.offerStatus === "accepted").length, icon: CheckCircle2, color: "text-emerald-600", bg: "bg-emerald-100 dark:bg-emerald-900" },
];

const pendingTasks = candidates.filter((c) => c.status === "review" || c.status === "approval" || c.status === "onboarding").map((c) => ({
  id: c.id, name: `${c.firstName} ${c.lastName}`,
  task: c.status === "review" ? "Review submission" : c.status === "approval" ? "Awaiting approval" : "Complete registration",
  priority: c.status === "review" ? "high" : "medium", deadline: "2 days",
}));

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="space-y-8">
        <div><h1 className="text-3xl font-bold tracking-tight">Dashboard</h1><p className="text-muted-foreground mt-1">Overview of your onboarding pipeline</p></div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
              <Card><CardContent className="p-6"><div className="flex items-center justify-between"><div><p className="text-sm font-medium text-muted-foreground">{stat.label}</p><p className="text-3xl font-bold mt-2">{stat.value}</p></div><div className={`h-12 w-12 rounded-lg ${stat.bg} flex items-center justify-center`}><stat.icon className={`h-6 w-6 ${stat.color}`} /></div></div></CardContent></Card>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base font-medium">Offers vs Acceptances</CardTitle><CardDescription>Monthly trend over the last 7 months</CardDescription></CardHeader>
            <CardContent><div className="h-[300px]"><ResponsiveContainer width="100%" height="100%"><AreaChart data={chartData}><defs><linearGradient id="colorOffers" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/><stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/></linearGradient><linearGradient id="colorAccepted" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/><stop offset="95%" stopColor="#10b981" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" className="stroke-muted" /><XAxis dataKey="name" className="text-xs text-muted-foreground" /><YAxis className="text-xs text-muted-foreground" /><Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} itemStyle={{ color: "hsl(var(--foreground))" }} /><Area type="monotone" dataKey="offers" stroke="#3b82f6" fillOpacity={1} fill="url(#colorOffers)" strokeWidth={2} /><Area type="monotone" dataKey="accepted" stroke="#10b981" fillOpacity={1} fill="url(#colorAccepted)" strokeWidth={2} /></AreaChart></ResponsiveContainer></div></CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base font-medium">Candidates by Department</CardTitle><CardDescription>Distribution across teams</CardDescription></CardHeader>
            <CardContent><div className="h-[300px]"><ResponsiveContainer width="100%" height="100%"><BarChart data={departmentData}><CartesianGrid strokeDasharray="3 3" className="stroke-muted" /><XAxis dataKey="name" className="text-xs text-muted-foreground" /><YAxis className="text-xs text-muted-foreground" /><Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }} itemStyle={{ color: "hsl(var(--foreground))" }} /><Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} /></BarChart></ResponsiveContainer></div></CardContent>
          </Card>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-base font-medium">Recent Activity</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><TrendingUp className="h-4 w-4 text-primary" /></div>
                  <div className="flex-1"><p className="text-sm"><span className="font-medium">{activity.user}</span> <span className="text-muted-foreground">{activity.action}</span> {activity.target && <span className="font-medium">{activity.target}</span>}</p><p className="text-xs text-muted-foreground mt-0.5">{formatDate(activity.timestamp)}</p></div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between"><CardTitle className="text-base font-medium">Pending Tasks</CardTitle><Link href="/candidates"><Button variant="ghost" size="sm" className="gap-1">View all <ArrowRight className="h-4 w-4" /></Button></Link></CardHeader>
            <CardContent className="space-y-4">
              {pendingTasks.length === 0 ? <div className="text-center py-8 text-muted-foreground"><CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-emerald-500" /><p>All caught up! No pending tasks.</p></div> : pendingTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-3"><AlertCircle className={`h-4 w-4 ${task.priority === "high" ? "text-destructive" : "text-amber-500"}`} /><div><p className="text-sm font-medium">{task.name}</p><p className="text-xs text-muted-foreground">{task.task}</p></div></div>
                  <Badge variant={task.priority === "high" ? "destructive" : "warning"} className="text-xs">{task.deadline}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
