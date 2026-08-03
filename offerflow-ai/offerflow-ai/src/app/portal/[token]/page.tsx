"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Upload, ArrowRight, ArrowLeft, Building, User, CreditCard, FileCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Employment", icon: Building },
  { id: 3, title: "Bank Details", icon: CreditCard },
  { id: 4, title: "Documents", icon: FileCheck },
];

export default function CandidatePortalPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completed, setCompleted] = useState(false);
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;
  const nextStep = () => { if (currentStep < steps.length) setCurrentStep(currentStep + 1); else setCompleted(true); };
  const prevStep = () => setCurrentStep(Math.max(1, currentStep - 1));
  if (completed) return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="max-w-md w-full text-center">
        <CardContent className="pt-12 pb-12">
          <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-6"><CheckCircle2 className="h-8 w-8 text-emerald-600 dark:text-emerald-300" /></div>
          <h2 className="text-2xl font-bold mb-2">Submission Complete!</h2>
          <p className="text-muted-foreground">Thank you for completing your onboarding. Our HR team will review your submission shortly.</p>
        </CardContent>
      </Card>
    </div>
  );
  return (
    <div className="min-h-screen bg-muted/30 py-12 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary text-primary-foreground mb-4"><Building className="h-6 w-6" /></div>
          <h1 className="text-2xl font-bold">Candidate Onboarding Portal</h1>
          <p className="text-muted-foreground mt-1">TechCorp Industries &bull; Senior Product Designer</p>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm"><span className="font-medium">Step {currentStep} of {steps.length}</span><span className="text-muted-foreground">{steps[currentStep - 1].title}</span></div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between pt-2">
            {steps.map((step) => (
              <div key={step.id} className={`flex flex-col items-center gap-1 ${step.id <= currentStep ? "text-primary" : "text-muted-foreground"}`}>
                <div className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${step.id <= currentStep ? "border-primary bg-primary/10" : "border-muted bg-muted"}`}>{step.id < currentStep ? <CheckCircle2 className="h-4 w-4" /> : step.id}</div>
                <span className="text-xs hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <Card>
              <CardHeader>
                <CardTitle>{steps[currentStep - 1].title}</CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Enter your personal details"}
                  {currentStep === 2 && "Confirm employment information"}
                  {currentStep === 3 && "Provide bank account details for payroll"}
                  {currentStep === 4 && "Upload required documents"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {currentStep === 1 && <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2"><Label>First Name</Label><Input placeholder="Sarah" /></div>
                  <div className="space-y-2"><Label>Last Name</Label><Input placeholder="Chen" /></div>
                  <div className="space-y-2"><Label>Email</Label><Input type="email" placeholder="sarah@email.com" /></div>
                  <div className="space-y-2"><Label>Phone</Label><Input placeholder="+1 (555) 123-4567" /></div>
                  <div className="space-y-2 sm:col-span-2"><Label>Address</Label><Input placeholder="450 Sutter St" /></div>
                  <div className="space-y-2"><Label>City</Label><Input placeholder="San Francisco" /></div>
                  <div className="space-y-2"><Label>State</Label><Input placeholder="CA" /></div>
                  <div className="space-y-2"><Label>ZIP</Label><Input placeholder="94108" /></div>
                  <div className="space-y-2"><Label>Country</Label><Input placeholder="USA" /></div>
                </div>}
                {currentStep === 2 && <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 space-y-2">
                    <p className="text-sm"><span className="text-muted-foreground">Position:</span> <span className="font-medium">Senior Product Designer</span></p>
                    <p className="text-sm"><span className="text-muted-foreground">Department:</span> <span className="font-medium">Design</span></p>
                    <p className="text-sm"><span className="text-muted-foreground">Start Date:</span> <span className="font-medium">September 1, 2026</span></p>
                    <p className="text-sm"><span className="text-muted-foreground">Salary:</span> <span className="font-medium">$165,000 / year</span></p>
                    <p className="text-sm"><span className="text-muted-foreground">Location:</span> <span className="font-medium">San Francisco, CA (Hybrid)</span></p>
                  </div>
                  <div className="space-y-2"><Label>SSN / Tax ID</Label><Input placeholder="***-**-****" /></div>
                </div>}
                {currentStep === 3 && <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2"><Label>Account Holder Name</Label><Input placeholder="Sarah Chen" /></div>
                  <div className="space-y-2 sm:col-span-2"><Label>Bank Name</Label><Input placeholder="Chase Bank" /></div>
                  <div className="space-y-2"><Label>Account Number</Label><Input placeholder="**** **** ****" /></div>
                  <div className="space-y-2"><Label>Routing Number</Label><Input placeholder="**** **** *" /></div>
                </div>}
                {currentStep === 4 && <div className="space-y-4">
                  {[
                    { name: "Resume / CV", required: true },
                    { name: "Government ID (Passport/Driver's License)", required: true },
                    { name: "Degree Certificate", required: true },
                    { name: "Previous Employment Proof", required: false },
                  ].map((doc) => (
                    <div key={doc.name} className="flex items-center justify-between p-4 rounded-lg border border-dashed hover:bg-muted/30 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center"><Upload className="h-5 w-5 text-primary" /></div>
                        <div><p className="font-medium text-sm">{doc.name}</p><p className="text-xs text-muted-foreground">{doc.required ? "Required" : "Optional"} &bull; PDF, JPG, PNG</p></div>
                      </div>
                      <Button variant="outline" size="sm">Upload</Button>
                    </div>
                  ))}
                </div>}
                <Separator />
                <div className="flex justify-between">
                  <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="gap-2"><ArrowLeft className="h-4 w-4" /> Back</Button>
                  <Button onClick={nextStep} className="gap-2">{currentStep === steps.length ? "Submit" : "Next"} <ArrowRight className="h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
