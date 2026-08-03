"use client";
import { useState } from "react";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { candidates } from "@/lib/data";
import { Search, ArrowRight, User } from "lucide-react";

const statusColors: Record<string, string> = {
  selected: "secondary", onboarding: "warning", review: "default", approval: "default",
  offer_generated: "default", offer_sent: "default", accepted: "success", rejected: "destructive",
};

export default function CandidatesPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const filtered = candidates.filter((c) => {
    const matchesSearch = `${c.firstName} ${c.lastName} ${c.position} ${c.department}`.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "all" || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  const statuses = ["all", ...Array.from(new Set(candidates.map((c) => c.status)))];
  return (
    <DashboardShell>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><h1 className="text-3xl font-bold tracking-tight">Candidates</h1><p className="text-muted-foreground mt-1">Manage and track all onboarding candidates</p></div>
          <Button>Send Onboarding Link</Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search by name, position, or department..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} /></div>
          <div className="flex gap-2 overflow-x-auto pb-2">{statuses.map((s) => <Button key={s} variant={statusFilter === s ? "default" : "outline"} size="sm" onClick={() => setStatusFilter(s)} className="capitalize shrink-0">{s.replace("_", " ")}</Button>)}</div>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b bg-muted/50">
                  <th className="text-left font-medium p-4">Candidate</th><th className="text-left font-medium p-4">Position</th><th className="text-left font-medium p-4">Department</th>
                  <th className="text-left font-medium p-4">Status</th><th className="text-left font-medium p-4">Documents</th><th className="text-left font-medium p-4">Approval</th>
                  <th className="text-left font-medium p-4">Offer</th><th className="text-right font-medium p-4">Actions</th>
                </tr></thead>
                <tbody>
                  {filtered.map((candidate) => (
                    <tr key={candidate.id} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4"><div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center"><User className="h-4 w-4 text-primary" /></div><div><p className="font-medium">{candidate.firstName} {candidate.lastName}</p><p className="text-xs text-muted-foreground">{candidate.email}</p></div></div></td>
                      <td className="p-4 text-muted-foreground">{candidate.position}</td>
                      <td className="p-4 text-muted-foreground">{candidate.department}</td>
                      <td className="p-4"><Badge variant={statusColors[candidate.status] as any} className="capitalize">{candidate.status.replace("_", " ")}</Badge></td>
                      <td className="p-4"><Badge variant={candidate.documentStatus === "verified" ? "success" : candidate.documentStatus === "pending" ? "warning" : "destructive"} className="capitalize">{candidate.documentStatus}</Badge></td>
                      <td className="p-4"><Badge variant={candidate.approvalStatus === "approved" ? "success" : candidate.approvalStatus === "pending" ? "secondary" : "destructive"} className="capitalize">{candidate.approvalStatus.replace("_", " ")}</Badge></td>
                      <td className="p-4"><Badge variant={candidate.offerStatus === "accepted" ? "success" : candidate.offerStatus === "not_started" ? "secondary" : "default"} className="capitalize">{candidate.offerStatus.replace("_", " ")}</Badge></td>
                      <td className="p-4 text-right"><Link href={`/candidates/${candidate.id}`}><Button variant="ghost" size="sm" className="gap-1">View <ArrowRight className="h-3 w-3" /></Button></Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {filtered.length === 0 && <div className="text-center py-12 text-muted-foreground"><Search className="h-8 w-8 mx-auto mb-2" /><p>No candidates found matching your criteria.</p></div>}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
