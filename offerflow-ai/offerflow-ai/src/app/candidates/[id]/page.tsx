"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { candidates } from "@/lib/data";
import { formatDate, formatCurrency } from "@/lib/utils";
import { ArrowLeft, User, Mail, Phone, MapPin, Briefcase, DollarSign, Building, CreditCard, FileText, Clock, CheckCircle2, Send, Shield, Upload, UserPlus } from "lucide-react";

const iconMap: Record<string, any> = { UserPlus, Mail, Upload, CheckCircle2, ArrowRight, Shield, FileText, Send, ThumbsUp: CheckCircle2 };

export default function CandidateDetailPage() {
  const params = useParams();
  const candidate = candidates.find((c) => c.id === params.id);
  if (!candidate) return <DashboardShell><div className="text-center py-24"><h2 className="text-2xl font-bold">Candidate not found</h2><Link href="/candidates"><Button variant="link">Back to candidates</Button></Link></div></DashboardShell>;
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link href="/candidates"><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
            <div><h1 className="text-2xl font-bold tracking-tight">{candidate.firstName} {candidate.lastName}</h1><p className="text-muted-foreground text-sm">{candidate.position} &bull; {candidate.department}</p></div>
          </div>
          <div className="flex gap-2">
            {candidate.status === "review" && <Link href={`/review/${candidate.id}`}><Button>Review Submission</Button></Link>}
            {candidate.status === "approval" && <Link href={`/approve/${candidate.id}`}><Button>Approve Offer</Button></Link>}
            {(candidate.status === "offer_generated" || candidate.status === "offer_sent") && <Link href={`/offer/${candidate.id}`}><Button variant="outline">View Offer</Button></Link>}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="capitalize">Status: {candidate.status.replace("_", " ")}</Badge>
          <Badge variant={candidate.documentStatus === "verified" ? "success" : "warning"} className="capitalize">Documents: {candidate.documentStatus}</Badge>
          <Badge variant={candidate.approvalStatus === "approved" ? "success" : "secondary"} className="capitalize">Approval: {candidate.approvalStatus.replace("_", " ")}</Badge>
        </div>
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="personal">Personal Info</TabsTrigger><TabsTrigger value="employment">Employment</TabsTrigger>
            <TabsTrigger value="bank">Bank Details</TabsTrigger><TabsTrigger value="ids">Government IDs</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger><TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>
          <TabsContent value="personal"><Card><CardHeader><CardTitle className="text-base">Personal Information</CardTitle></CardHeader><CardContent className="grid gap-6 sm:grid-cols-2">
            <InfoItem icon={User} label="Full Name" value={`${candidate.firstName} ${candidate.lastName}`} /><InfoItem icon={Mail} label="Email" value={candidate.email} />
            <InfoItem icon={Phone} label="Phone" value={candidate.phone} /><InfoItem icon={MapPin} label="Address" value={candidate.personalInfo?.address || "N/A"} />
            <InfoItem icon={MapPin} label="City" value={candidate.personalInfo?.city || "N/A"} /><InfoItem icon={MapPin} label="State" value={candidate.personalInfo?.state || "N/A"} />
            <InfoItem icon={MapPin} label="ZIP" value={candidate.personalInfo?.zip || "N/A"} /><InfoItem icon={MapPin} label="Country" value={candidate.personalInfo?.country || "N/A"} />
          </CardContent></Card></TabsContent>
          <TabsContent value="employment"><Card><CardHeader><CardTitle className="text-base">Employment Details</CardTitle></CardHeader><CardContent className="grid gap-6 sm:grid-cols-2">
            <InfoItem icon={Briefcase} label="Position" value={candidate.position} /><InfoItem icon={Building} label="Department" value={candidate.department} />
            <InfoItem icon={Clock} label="Start Date" value={candidate.employmentDetails?.startDate ? formatDate(candidate.employmentDetails.startDate) : "N/A"} />
            <InfoItem icon={Briefcase} label="Employment Type" value={candidate.employmentDetails?.employmentType || "N/A"} />
            <InfoItem icon={DollarSign} label="Salary" value={candidate.employmentDetails?.salary ? formatCurrency(candidate.employmentDetails.salary) : "N/A"} />
            <InfoItem icon={User} label="Reporting To" value={candidate.employmentDetails?.reportingTo || "N/A"} />
            <InfoItem icon={MapPin} label="Location" value={candidate.employmentDetails?.location || "N/A"} />
          </CardContent></Card></TabsContent>
          <TabsContent value="bank"><Card><CardHeader><CardTitle className="text-base">Bank Details</CardTitle></CardHeader><CardContent className="grid gap-6 sm:grid-cols-2">
            <InfoItem icon={User} label="Account Name" value={candidate.bankDetails?.accountName || "N/A"} /><InfoItem icon={CreditCard} label="Account Number" value={candidate.bankDetails?.accountNumber || "N/A"} />
            <InfoItem icon={Building} label="Bank Name" value={candidate.bankDetails?.bankName || "N/A"} /><InfoItem icon={FileText} label="IFSC Code" value={candidate.bankDetails?.ifscCode || "N/A"} />
            <InfoItem icon={MapPin} label="Branch" value={candidate.bankDetails?.branch || "N/A"} />
          </CardContent></Card></TabsContent>
          <TabsContent value="ids"><Card><CardHeader><CardTitle className="text-base">Government IDs</CardTitle></CardHeader><CardContent className="grid gap-6 sm:grid-cols-2">
            <InfoItem icon={FileText} label="SSN" value={candidate.governmentIds?.ssn || "N/A"} /><InfoItem icon={FileText} label="Tax ID" value={candidate.governmentIds?.taxId || "N/A"} />
            <InfoItem icon={FileText} label="Passport" value={candidate.governmentIds?.passport || "N/A"} />
          </CardContent></Card></TabsContent>
          <TabsContent value="documents"><Card><CardHeader><CardTitle className="text-base">Uploaded Documents</CardTitle></CardHeader><CardContent className="space-y-3">
            {candidate.documents && candidate.documents.length > 0 ? candidate.documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><FileText className="h-5 w-5 text-primary" /></div><div><p className="font-medium text-sm">{doc.name}</p><p className="text-xs text-muted-foreground capitalize">{doc.type} &bull; {formatDate(doc.uploadedAt)}</p></div></div>
                <Badge variant={doc.status === "verified" ? "success" : "warning"} className="capitalize">{doc.status}</Badge>
              </div>
            )) : <p className="text-muted-foreground text-center py-8">No documents uploaded yet.</p>}
          </CardContent></Card></TabsContent>
          <TabsContent value="timeline"><Card><CardHeader><CardTitle className="text-base">Activity Timeline</CardTitle></CardHeader><CardContent className="space-y-0">
            {candidate.timeline && candidate.timeline.length > 0 ? <div className="relative pl-8 border-l space-y-8">
              {candidate.timeline.map((event) => { const Icon = iconMap[event.icon] || Clock; return (
                <div key={event.id} className="relative">
                  <div className="absolute -left-[39px] h-8 w-8 rounded-full bg-primary/10 border-2 border-background flex items-center justify-center"><Icon className="h-4 w-4 text-primary" /></div>
                  <div><div className="flex items-center gap-2"><p className="font-medium text-sm">{event.event}</p><span className="text-xs text-muted-foreground">{formatDate(event.timestamp)}</span></div><p className="text-sm text-muted-foreground mt-0.5">{event.description}</p><p className="text-xs text-muted-foreground mt-1">by {event.user}</p></div>
                </div>
              ); })}
            </div> : <p className="text-muted-foreground text-center py-8">No activity recorded yet.</p>}
          </CardContent></Card></TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}

function InfoItem({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return <div className="flex items-start gap-3"><div className="h-8 w-8 rounded-lg bg-muted flex items-center justify-center shrink-0"><Icon className="h-4 w-4 text-muted-foreground" /></div><div><p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p><p className="font-medium mt-0.5">{value}</p></div></div>;
}
