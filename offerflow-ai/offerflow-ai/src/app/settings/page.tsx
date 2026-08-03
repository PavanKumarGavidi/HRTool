"use client";
import { DashboardShell } from "@/components/layout/dashboard-shell";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { companySettings } from "@/lib/data";
import { Upload } from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <div className="max-w-4xl mx-auto space-y-6">
        <div><h1 className="text-3xl font-bold tracking-tight">Company Settings</h1><p className="text-muted-foreground mt-1">Manage your organization profile and preferences</p></div>
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="bg-muted/50"><TabsTrigger value="profile">Profile</TabsTrigger><TabsTrigger value="template">Offer Template</TabsTrigger><TabsTrigger value="email">Email Settings</TabsTrigger><TabsTrigger value="users">Users & Roles</TabsTrigger></TabsList>
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Company Profile</CardTitle><CardDescription>Update your company information and branding</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl bg-muted flex items-center justify-center border-2 border-dashed border-border"><Upload className="h-6 w-6 text-muted-foreground" /></div>
                  <div><Button variant="outline" size="sm">Upload Logo</Button><p className="text-xs text-muted-foreground mt-1">SVG, PNG or JPG (max. 2MB)</p></div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2"><Label>Company Name</Label><Input defaultValue={companySettings.name} /></div>
                  <div className="space-y-2"><Label>Website</Label><Input defaultValue={companySettings.website} /></div>
                  <div className="space-y-2 sm:col-span-2"><Label>Address</Label><Textarea defaultValue={companySettings.address} /></div>
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="template" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Offer Letter Template</CardTitle><CardDescription>Customize the default offer letter template with merge fields</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["{{candidate_name}}", "{{position}}", "{{department}}", "{{start_date}}", "{{salary}}", "{{company_name}}"].map((field) => <Button key={field} variant="secondary" size="sm">{field}</Button>)}
                </div>
                <Textarea defaultValue={companySettings.offerTemplate} className="min-h-[400px] font-mono text-sm" />
                <Button>Save Template</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="email" className="space-y-6">
            <Card>
              <CardHeader><CardTitle className="text-base">Email Settings</CardTitle><CardDescription>Configure sender details for automated emails</CardDescription></CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2"><Label>Sender Name</Label><Input defaultValue={companySettings.emailSettings.senderName} /></div>
                  <div className="space-y-2"><Label>Sender Email</Label><Input defaultValue={companySettings.emailSettings.senderEmail} /></div>
                  <div className="space-y-2"><Label>Reply-To Email</Label><Input defaultValue={companySettings.emailSettings.replyTo} /></div>
                </div>
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between"><div><CardTitle className="text-base">Team Members</CardTitle><CardDescription>Manage access and permissions</CardDescription></div><Button size="sm">Invite User</Button></CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Emily Watson", email: "emily@techcorp.com", role: "HR Specialist", status: "Active" },
                  { name: "Michael Ross", email: "michael@techcorp.com", role: "HR Manager", status: "Active" },
                  { name: "David Kim", email: "david@techcorp.com", role: "Department Head", status: "Active" },
                ].map((user) => (
                  <div key={user.email} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">{user.name[0]}</div>
                      <div><p className="font-medium text-sm">{user.name}</p><p className="text-xs text-muted-foreground">{user.email}</p></div>
                    </div>
                    <div className="flex items-center gap-3"><span className="text-sm text-muted-foreground">{user.role}</span><Button variant="ghost" size="sm">Edit</Button></div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardShell>
  );
}
