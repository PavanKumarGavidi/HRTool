"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { candidates, companySettings } from "@/lib/data";
import { formatDate, formatCurrency } from "@/lib/utils";
import { ArrowLeft, Download, Send, Printer } from "lucide-react";

export default function OfferLetterPage() {
  const params = useParams();
  const candidate = candidates.find((c) => c.id === params.id);
  if (!candidate) return <DashboardShell><div className="py-24 text-center">Candidate not found</div></DashboardShell>;
  return (
    <DashboardShell>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/candidates/${candidate.id}`}><Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button></Link>
            <div><h1 className="text-2xl font-bold">Offer Letter</h1><p className="text-muted-foreground text-sm">Preview and send the generated offer</p></div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2"><Printer className="h-4 w-4" /> Print</Button>
            <Button variant="outline" size="sm" className="gap-2"><Download className="h-4 w-4" /> Download</Button>
            <Button size="sm" className="gap-2"><Send className="h-4 w-4" /> Send to Candidate</Button>
          </div>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-white text-black p-12 md:p-16 min-h-[800px] shadow-inner">
              <div className="flex items-center justify-between border-b-2 border-gray-900 pb-6 mb-8">
                <div><h2 className="text-2xl font-bold tracking-tight">{companySettings.name}</h2><p className="text-sm text-gray-600 mt-1">{companySettings.address}</p><p className="text-sm text-gray-600">{companySettings.website}</p></div>
                <div className="text-right"><p className="text-sm font-medium">OFFER LETTER</p><p className="text-xs text-gray-500 mt-1">Ref: {candidate.id.toUpperCase()}</p><p className="text-xs text-gray-500">{formatDate(new Date().toISOString())}</p></div>
              </div>
              <div className="space-y-6">
                <p className="font-medium">Dear {candidate.firstName} {candidate.lastName},</p>
                <p className="leading-relaxed">We are delighted to offer you the position of <strong>{candidate.position}</strong> in the <strong>{candidate.department}</strong> department at {companySettings.name}. We were impressed by your experience and believe you will be a valuable addition to our team.</p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
                  <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">Position Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-gray-600">Position:</span> <span className="font-medium">{candidate.position}</span></div>
                    <div><span className="text-gray-600">Department:</span> <span className="font-medium">{candidate.department}</span></div>
                    <div><span className="text-gray-600">Employment Type:</span> <span className="font-medium">{candidate.employmentDetails?.employmentType}</span></div>
                    <div><span className="text-gray-600">Reporting To:</span> <span className="font-medium">{candidate.employmentDetails?.reportingTo}</span></div>
                    <div><span className="text-gray-600">Start Date:</span> <span className="font-medium">{formatDate(candidate.employmentDetails?.startDate || "")}</span></div>
                    <div><span className="text-gray-600">Location:</span> <span className="font-medium">{candidate.employmentDetails?.location}</span></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
                  <h3 className="font-bold text-lg mb-4 border-b border-gray-200 pb-2">Compensation</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-600">Base Salary</span><span className="font-medium">{formatCurrency(candidate.employmentDetails?.salary || 0)} / year</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Signing Bonus</span><span className="font-medium">{formatCurrency(10000)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Equity (RSUs)</span><span className="font-medium">{formatCurrency(50000)} over 4 years</span></div>
                    <Separator className="my-2 bg-gray-300" />
                    <div className="flex justify-between font-bold"><span>Total First Year</span><span>{formatCurrency((candidate.employmentDetails?.salary || 0) + 10000 + 12500)}</span></div>
                  </div>
                </div>
                <p className="leading-relaxed">This offer is contingent upon the successful completion of a background check and your ability to provide proof of eligibility to work in the United States. Please sign and return this letter by <strong>{formatDate("2026-08-15T00:00:00Z")}</strong> to confirm your acceptance.</p>
                <p className="leading-relaxed">We are excited about the possibility of you joining {companySettings.name} and look forward to your positive response.</p>
                <div className="mt-12"><p className="font-medium">Sincerely,</p><div className="h-12 border-b border-gray-400 w-48 mt-2 mb-1" /><p className="font-bold">Michael Ross</p><p className="text-sm text-gray-600">HR Manager, {companySettings.name}</p></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}
