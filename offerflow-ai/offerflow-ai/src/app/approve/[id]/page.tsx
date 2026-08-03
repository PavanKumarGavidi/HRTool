"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { candidates } from "@/lib/data";
import { formatDate, formatCurrency } from "@/lib/utils";
import { ArrowLeft, CheckCircle2, XCircle, RefreshCw, Clock, Shield, UserCheck } from "lucide-react";

export default function ApprovePage() {
  const params = useParams();
  const candidate = candidates.find((c) => c.id === params.id);
  if (!candidate) return <DashboardShell><div className="py-24 text-center">Candidate not found</div></DashboardShell>;
  return (
    <DashboardShell>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/candidates/${candidate.id}`}><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
          <div><h1 className="text-2xl font-bold">Manager Approval</h1><p className="text-muted-foreground text-sm">Final approval required to generate offer letter</p></div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Approval Request Details</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">{candidate.firstName[0]}{candidate.lastName[0]}</div>
                    <div><p className="font-semibold">{candidate.firstName} {candidate.lastName}</p><p className="text-sm text-muted-foreground">{candidate.position}</p></div>
                  </div>
                  <Badge variant="warning">Awaiting Approval</Badge>
                </div>
                <Separator />
                <div className="grid gap-3 sm:grid-cols-2 text-sm">
                  <div><span className="text-muted-foreground">Department:</span> <span className="font-medium">{candidate.department}</span></div>
                  <div><span className="text-muted-foreground">Salary:</span> <span className="font-medium">{formatCurrency(candidate.employmentDetails?.salary || 0)}</span></div>
                  <div><span className="text-muted-foreground">Start Date:</span> <span className="font-medium">{formatDate(candidate.employmentDetails?.startDate || "")}</span></div>
                  <div><span className="text-muted-foreground">Location:</span> <span className="font-medium">{candidate.employmentDetails?.location}</span></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Approval Timeline</CardTitle></CardHeader>
              <CardContent>
                <div className="relative pl-8 border-l space-y-6">
                  <div className="relative"><div className="absolute -left-[39px] h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900 border-2 border-background flex items-center justify-center"><UserCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /></div><p className="font-medium text-sm">Candidate Selected</p><p className="text-xs text-muted-foreground">{formatDate(candidate.submittedAt)}</p></div>
                  <div className="relative"><div className="absolute -left-[39px] h-8 w-8 rounded-full bg-emerald-100 dark:bg-emerald-900 border-2 border-background flex items-center justify-center"><CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-300" /></div><p className="font-medium text-sm">HR Review Completed</p><p className="text-xs text-muted-foreground">Forwarded by Emily Watson</p></div>
                  <div className="relative"><div className="absolute -left-[39px] h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 border-2 border-background flex items-center justify-center"><Clock className="h-4 w-4 text-amber-600 dark:text-amber-300" /></div><p className="font-medium text-sm">Pending Manager Approval</p><p className="text-xs text-muted-foreground">Awaiting your decision</p></div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Decision</CardTitle><CardDescription>Approve, reject, or request changes</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <Textarea placeholder="Add a comment (optional)..." className="min-h-[100px]" />
                <Button className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700"><CheckCircle2 className="h-4 w-4" /> Approve & Generate Offer</Button>
                <Button variant="outline" className="w-full gap-2"><RefreshCw className="h-4 w-4" /> Request Changes</Button>
                <Button variant="outline" className="w-full gap-2 text-destructive hover:bg-destructive/10"><XCircle className="h-4 w-4" /> Reject Candidate</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
