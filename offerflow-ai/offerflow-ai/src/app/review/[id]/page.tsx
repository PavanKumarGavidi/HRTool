"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { candidates } from "@/lib/data";
import { formatDate, formatCurrency } from "@/lib/utils";
import { ArrowLeft, CheckCircle2, XCircle, FileText, User, Mail, Briefcase, DollarSign } from "lucide-react";

export default function ReviewPage() {
  const params = useParams();
  const candidate = candidates.find((c) => c.id === params.id);
  if (!candidate) return <DashboardShell><div className="py-24 text-center">Candidate not found</div></DashboardShell>;
  return (
    <DashboardShell>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href={`/candidates/${candidate.id}`}><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
          <div><h1 className="text-2xl font-bold">HR Review</h1><p className="text-muted-foreground text-sm">Review candidate submission before forwarding to manager</p></div>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Candidate Summary</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold text-primary">{candidate.firstName[0]}{candidate.lastName[0]}</div>
                  <div><h3 className="text-lg font-semibold">{candidate.firstName} {candidate.lastName}</h3><p className="text-muted-foreground">{candidate.position} &bull; {candidate.department}</p></div>
                </div>
                <Separator />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" /><span className="text-sm">{candidate.email}</span></div>
                  <div className="flex items-center gap-2"><Briefcase className="h-4 w-4 text-muted-foreground" /><span className="text-sm">{candidate.employmentDetails?.employmentType}</span></div>
                  <div className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-muted-foreground" /><span className="text-sm">{formatCurrency(candidate.employmentDetails?.salary || 0)}</span></div>
                  <div className="flex items-center gap-2"><User className="h-4 w-4 text-muted-foreground" /><span className="text-sm">Reports to {candidate.employmentDetails?.reportingTo}</span></div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader><CardTitle className="text-base">Documents Submitted</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                {candidate.documents?.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3"><FileText className="h-5 w-5 text-primary" /><span className="text-sm font-medium">{doc.name}</span></div>
                    <Badge variant={doc.status === "verified" ? "success" : "warning"} className="capitalize">{doc.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Review Actions</CardTitle><CardDescription>Approve to forward to HR Manager</CardDescription></CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full gap-2"><CheckCircle2 className="h-4 w-4" /> Forward to Manager</Button>
                <Button variant="outline" className="w-full gap-2"><XCircle className="h-4 w-4" /> Request Changes</Button>
                <Separator />
                <div className="text-xs text-muted-foreground space-y-1"><p>Submitted: {formatDate(candidate.submittedAt)}</p><p>Documents: {candidate.documents?.length || 0} uploaded</p></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
