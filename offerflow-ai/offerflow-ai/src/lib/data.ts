export interface Candidate {
  id: string; firstName: string; lastName: string; email: string; phone: string;
  position: string; department: string;
  status: "selected"|"onboarding"|"review"|"approval"|"offer_generated"|"offer_sent"|"accepted"|"rejected";
  documentStatus: "pending"|"uploaded"|"verified"|"rejected";
  approvalStatus: "pending"|"approved"|"rejected"|"changes_requested";
  offerStatus: "not_started"|"generated"|"sent"|"accepted"|"rejected";
  submittedAt: string;
  personalInfo?: { dob:string; address:string; city:string; state:string; zip:string; country:string; };
  employmentDetails?: { startDate:string; employmentType:string; salary:number; currency:string; reportingTo:string; location:string; };
  bankDetails?: { accountName:string; accountNumber:string; bankName:string; ifscCode:string; branch:string; };
  governmentIds?: { ssn:string; taxId:string; passport?:string; };
  documents?: { id:string; name:string; type:string; url:string; uploadedAt:string; status:"pending"|"verified"|"rejected"; }[];
  timeline?: { id:string; event:string; description:string; timestamp:string; user:string; icon:string; }[];
}
export interface Activity { id:string; user:string; action:string; target:string; timestamp:string; type:"candidate"|"offer"|"approval"|"document"; }
export interface CompanySettings { name:string; logo:string; address:string; website:string; offerTemplate:string; emailSettings:{senderName:string; senderEmail:string; replyTo:string;}; }

export const candidates: Candidate[] = [
  { id:"cand_001", firstName:"Sarah", lastName:"Chen", email:"sarah.chen@email.com", phone:"+1 (555) 123-4567", position:"Senior Product Designer", department:"Design", status:"offer_sent", documentStatus:"verified", approvalStatus:"approved", offerStatus:"sent", submittedAt:"2026-07-28T10:00:00Z",
    personalInfo:{ dob:"1992-03-15", address:"450 Sutter St", city:"San Francisco", state:"CA", zip:"94108", country:"USA" },
    employmentDetails:{ startDate:"2026-09-01", employmentType:"Full-time", salary:165000, currency:"USD", reportingTo:"Alex Rivera", location:"San Francisco, CA (Hybrid)" },
    bankDetails:{ accountName:"Sarah Chen", accountNumber:"****4521", bankName:"Chase Bank", ifscCode:"CHASUS33", branch:"Market St" },
    governmentIds:{ ssn:"***-**-6789", taxId:"987-65-4321" },
    documents:[
      { id:"doc_1", name:"Resume.pdf", type:"resume", url:"#", uploadedAt:"2026-07-28T10:05:00Z", status:"verified" },
      { id:"doc_2", name:"ID_Proof.pdf", type:"id", url:"#", uploadedAt:"2026-07-28T10:10:00Z", status:"verified" },
      { id:"doc_3", name:"Degree_Certificate.pdf", type:"education", url:"#", uploadedAt:"2026-07-28T10:15:00Z", status:"verified" },
    ],
    timeline:[
      { id:"t1", event:"Candidate Selected", description:"Moved to onboarding pipeline", timestamp:"2026-07-28T09:00:00Z", user:"HR System", icon:"UserPlus" },
      { id:"t2", event:"Onboarding Link Sent", description:"Secure portal link emailed", timestamp:"2026-07-28T09:30:00Z", user:"HR System", icon:"Mail" },
      { id:"t3", event:"Documents Uploaded", description:"All 3 documents submitted", timestamp:"2026-07-28T10:15:00Z", user:"Sarah Chen", icon:"Upload" },
      { id:"t4", event:"HR Review Completed", description:"Forwarded to HR Manager", timestamp:"2026-07-29T14:00:00Z", user:"Emily Watson", icon:"CheckCircle2" },
      { id:"t5", event:"Offer Approved", description:"Approved by HR Manager", timestamp:"2026-07-30T11:00:00Z", user:"Michael Ross", icon:"Shield" },
      { id:"t6", event:"Offer Generated", description:"Offer letter PDF created", timestamp:"2026-07-30T11:30:00Z", user:"HR System", icon:"FileText" },
      { id:"t7", event:"Offer Sent", description:"Emailed to candidate", timestamp:"2026-07-30T12:00:00Z", user:"HR System", icon:"Send" },
    ],
  },
  { id:"cand_002", firstName:"James", lastName:"Wilson", email:"j.wilson@email.com", phone:"+1 (555) 987-6543", position:"Backend Engineer", department:"Engineering", status:"review", documentStatus:"uploaded", approvalStatus:"pending", offerStatus:"not_started", submittedAt:"2026-08-01T09:00:00Z",
    personalInfo:{ dob:"1988-11-22", address:"221 Baker St", city:"Austin", state:"TX", zip:"78701", country:"USA" },
    employmentDetails:{ startDate:"2026-09-15", employmentType:"Full-time", salary:145000, currency:"USD", reportingTo:"David Kim", location:"Austin, TX (Remote)" },
    bankDetails:{ accountName:"James Wilson", accountNumber:"****8892", bankName:"Bank of America", ifscCode:"BOFAUS3N", branch:"Congress Ave" },
    governmentIds:{ ssn:"***-**-1234", taxId:"123-45-6789" },
    documents:[
      { id:"doc_4", name:"Resume.pdf", type:"resume", url:"#", uploadedAt:"2026-08-01T09:15:00Z", status:"verified" },
      { id:"doc_5", name:"Passport.pdf", type:"id", url:"#", uploadedAt:"2026-08-01T09:20:00Z", status:"pending" },
    ],
    timeline:[
      { id:"t8", event:"Candidate Selected", description:"Moved to onboarding pipeline", timestamp:"2026-08-01T08:00:00Z", user:"HR System", icon:"UserPlus" },
      { id:"t9", event:"Onboarding Link Sent", description:"Secure portal link emailed", timestamp:"2026-08-01T08:30:00Z", user:"HR System", icon:"Mail" },
      { id:"t10", event:"Documents Uploaded", description:"2 of 3 documents submitted", timestamp:"2026-08-01T09:20:00Z", user:"James Wilson", icon:"Upload" },
    ],
  },
  { id:"cand_003", firstName:"Priya", lastName:"Patel", email:"priya.patel@email.com", phone:"+1 (555) 456-7890", position:"Marketing Manager", department:"Marketing", status:"approval", documentStatus:"verified", approvalStatus:"pending", offerStatus:"not_started", submittedAt:"2026-07-25T14:00:00Z",
    personalInfo:{ dob:"1990-07-08", address:"88 Madison Ave", city:"New York", state:"NY", zip:"10016", country:"USA" },
    employmentDetails:{ startDate:"2026-08-20", employmentType:"Full-time", salary:130000, currency:"USD", reportingTo:"Lisa Wong", location:"New York, NY (On-site)" },
    bankDetails:{ accountName:"Priya Patel", accountNumber:"****3344", bankName:"Wells Fargo", ifscCode:"WFBIUS6S", branch:"Madison Ave" },
    governmentIds:{ ssn:"***-**-5566", taxId:"556-66-7788" },
    documents:[
      { id:"doc_6", name:"Resume.pdf", type:"resume", url:"#", uploadedAt:"2026-07-25T14:10:00Z", status:"verified" },
      { id:"doc_7", name:"ID_Proof.pdf", type:"id", url:"#", uploadedAt:"2026-07-25T14:15:00Z", status:"verified" },
      { id:"doc_8", name:"Experience_Letter.pdf", type:"experience", url:"#", uploadedAt:"2026-07-25T14:20:00Z", status:"verified" },
    ],
    timeline:[
      { id:"t11", event:"Candidate Selected", description:"Moved to onboarding pipeline", timestamp:"2026-07-25T13:00:00Z", user:"HR System", icon:"UserPlus" },
      { id:"t12", event:"Onboarding Completed", description:"All details submitted", timestamp:"2026-07-25T14:20:00Z", user:"Priya Patel", icon:"CheckCircle2" },
      { id:"t13", event:"HR Review Completed", description:"Forwarded to HR Manager", timestamp:"2026-07-26T10:00:00Z", user:"Emily Watson", icon:"ArrowRight" },
    ],
  },
  { id:"cand_004", firstName:"Marcus", lastName:"Johnson", email:"marcus.j@email.com", phone:"+1 (555) 234-5678", position:"DevOps Engineer", department:"Engineering", status:"accepted", documentStatus:"verified", approvalStatus:"approved", offerStatus:"accepted", submittedAt:"2026-07-15T11:00:00Z",
    personalInfo:{ dob:"1985-01-30", address:"500 W Madison St", city:"Chicago", state:"IL", zip:"60661", country:"USA" },
    employmentDetails:{ startDate:"2026-08-05", employmentType:"Full-time", salary:155000, currency:"USD", reportingTo:"David Kim", location:"Chicago, IL (Hybrid)" },
    bankDetails:{ accountName:"Marcus Johnson", accountNumber:"****9900", bankName:"Citi Bank", ifscCode:"CITIUS33", branch:"Madison St" },
    governmentIds:{ ssn:"***-**-8877", taxId:"887-77-6655" },
    documents:[
      { id:"doc_9", name:"Resume.pdf", type:"resume", url:"#", uploadedAt:"2026-07-15T11:10:00Z", status:"verified" },
      { id:"doc_10", name:"ID_Proof.pdf", type:"id", url:"#", uploadedAt:"2026-07-15T11:15:00Z", status:"verified" },
    ],
    timeline:[
      { id:"t14", event:"Candidate Selected", description:"Moved to onboarding pipeline", timestamp:"2026-07-15T10:00:00Z", user:"HR System", icon:"UserPlus" },
      { id:"t15", event:"Offer Accepted", description:"Candidate signed the offer", timestamp:"2026-07-20T09:00:00Z", user:"Marcus Johnson", icon:"ThumbsUp" },
    ],
  },
  { id:"cand_005", firstName:"Emily", lastName:"Rodriguez", email:"emily.r@email.com", phone:"+1 (555) 876-5432", position:"HR Business Partner", department:"Human Resources", status:"onboarding", documentStatus:"pending", approvalStatus:"pending", offerStatus:"not_started", submittedAt:"2026-08-02T08:00:00Z",
    personalInfo:{ dob:"1993-05-12", address:"1001 Pine St", city:"Seattle", state:"WA", zip:"98101", country:"USA" },
    employmentDetails:{ startDate:"2026-09-01", employmentType:"Full-time", salary:125000, currency:"USD", reportingTo:"Michael Ross", location:"Seattle, WA (Hybrid)" },
    bankDetails:{ accountName:"Emily Rodriguez", accountNumber:"****1122", bankName:"US Bank", ifscCode:"USBKUS44", branch:"Pine St" },
    governmentIds:{ ssn:"***-**-3344", taxId:"334-44-5566" },
    documents:[],
    timeline:[
      { id:"t16", event:"Candidate Selected", description:"Moved to onboarding pipeline", timestamp:"2026-08-02T07:00:00Z", user:"HR System", icon:"UserPlus" },
      { id:"t17", event:"Onboarding Link Sent", description:"Secure portal link emailed", timestamp:"2026-08-02T07:30:00Z", user:"HR System", icon:"Mail" },
    ],
  },
];

export const activities: Activity[] = [
  { id:"a1", user:"Emily Watson", action:"reviewed", target:"James Wilson", timestamp:"2026-08-01T16:00:00Z", type:"candidate" },
  { id:"a2", user:"HR System", action:"sent offer to", target:"Sarah Chen", timestamp:"2026-07-30T12:00:00Z", type:"offer" },
  { id:"a3", user:"Michael Ross", action:"approved", target:"Priya Patel", timestamp:"2026-07-29T11:00:00Z", type:"approval" },
  { id:"a4", user:"Marcus Johnson", action:"uploaded documents", target:"", timestamp:"2026-07-15T11:15:00Z", type:"document" },
  { id:"a5", user:"HR System", action:"generated offer for", target:"Sarah Chen", timestamp:"2026-07-30T11:30:00Z", type:"offer" },
];

export const companySettings: CompanySettings = {
  name: "TechCorp Industries",
  logo: "",
  address: "123 Innovation Drive, San Francisco, CA 94105",
  website: "https://techcorp.example.com",
  offerTemplate: `Dear {{candidate_name}},\n\nWe are delighted to offer you the position of {{position}} at {{company_name}}.\n\nStart Date: {{start_date}}\nSalary: {{salary}}\n\nPlease sign and return this letter by {{deadline}}.\n\nBest regards,\n{{company_name}} HR Team`,
  emailSettings: { senderName: "TechCorp HR", senderEmail: "hr@techcorp.example.com", replyTo: "hr@techcorp.example.com" },
};

export const chartData = [
  { name: "Jan", offers: 4, accepted: 3 }, { name: "Feb", offers: 6, accepted: 5 },
  { name: "Mar", offers: 8, accepted: 6 }, { name: "Apr", offers: 5, accepted: 4 },
  { name: "May", offers: 9, accepted: 7 }, { name: "Jun", offers: 7, accepted: 6 },
  { name: "Jul", offers: 10, accepted: 8 },
];

export const departmentData = [
  { name: "Engineering", count: 12 }, { name: "Design", count: 5 },
  { name: "Marketing", count: 4 }, { name: "HR", count: 3 }, { name: "Sales", count: 6 },
];
