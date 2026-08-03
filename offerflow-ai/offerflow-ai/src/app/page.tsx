"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ArrowRight, Zap, Shield, FileText, Workflow, Clock, CheckCircle2, Mail, Upload, UserCheck, Send, ThumbsUp, Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { ROUTES } from "@/lib/constants";
const features = [
  { icon: Shield, title: "Secure Onboarding Portal", description: "Send encrypted onboarding links to candidates with time-bound access and audit trails." },
  { icon: Upload, title: "Document Collection", description: "Drag-and-drop document uploads with automatic verification and status tracking." },
  { icon: Workflow, title: "Approval Workflows", description: "Multi-stage approval chains with HR review and manager sign-off before offer generation." },
  { icon: FileText, title: "Automated Offer Letters", description: "Generate professional, compliant offer letters instantly with dynamic template fields." },
  { icon: Mail, title: "Email Automation", description: "Automatically email offer letters and track candidate acceptance status in real-time." },
  { icon: Clock, title: "Activity Timeline", description: "Complete audit trail from candidate selection to offer acceptance with timestamps." },
];
const workflowSteps = [
  { step: "01", title: "Candidate Selected", desc: "HR selects candidate from external ATS", icon: UserCheck },
  { step: "02", title: "Onboarding Link Sent", desc: "Secure portal link emailed to candidate", icon: Mail },
  { step: "03", title: "Candidate Submits", desc: "Personal info, documents, and details uploaded", icon: Upload },
  { step: "04", title: "HR Review", desc: "HR team reviews and forwards to manager", icon: CheckCircle2 },
  { step: "05", title: "Manager Approval", desc: "Final approval with optional change requests", icon: ThumbsUp },
  { step: "06", title: "Offer Generated", desc: "System creates and emails the offer letter", icon: FileText },
  { step: "07", title: "Candidate Accepts", desc: "Digital acceptance tracked in dashboard", icon: Send },
];
const testimonials = [
  { name: "Alex Rivera", role: "VP of People, TechFlow", content: "OfferFlow AI reduced our time-to-offer by 70%. The approval workflow is seamless and our candidates love the portal experience." },
  { name: "Sarah Kim", role: "HR Director, Nexus Labs", content: "We processed 200+ offers last quarter without a single error. The automated document collection saved us countless hours." },
  { name: "David Chen", role: "CEO, StartupGrid", content: "The demo mode let us evaluate the platform instantly. Within a week, we onboarded our entire team onto OfferFlow." },
];
const faqs = [
  { q: "Is OfferFlow AI an ATS?", a: "No. OfferFlow AI starts where your ATS ends. We handle the post-selection workflow from onboarding to offer acceptance." },
  { q: "How secure is the candidate portal?", a: "All links are cryptographically signed, time-bound, and access is fully audited. We use enterprise-grade encryption." },
  { q: "Can we customize offer letter templates?", a: "Yes. You can create dynamic templates with merge fields, custom branding, and digital signature placeholders." },
  { q: "Does it integrate with our existing HRIS?", a: "We offer native integrations with Workday, BambooHR, and Rippling, plus a robust API for custom integrations." },
  { q: "Is there a free trial?", a: "Absolutely. Start a 14-day free trial with full features, or try our instant demo workspace with sample data." },
];
export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden border-b bg-background pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium"><Zap className="mr-1 h-3.5 w-3.5" /> Now with AI-powered document verification</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">Onboard candidates <br className="hidden sm:block" /><span className="gradient-text">at lightspeed</span></h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">The enterprise platform that automates everything from candidate selection to offer acceptance. No more spreadsheets, no more delays.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={ROUTES.register}><Button size="lg" className="h-12 px-8 text-base rounded-full">Start Free Trial <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link href={ROUTES.demo}><Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full">Try Demo</Button></Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-16 w-full max-w-5xl">
            <div className="rounded-2xl border bg-card p-2 shadow-2xl">
              <div className="rounded-xl bg-muted/50 p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4"><Workflow className="h-8 w-8 text-primary" /></div>
                  <p className="text-lg font-medium text-muted-foreground">Dashboard Preview</p>
                  <p className="text-sm text-muted-foreground/60">Try the demo to see the full interface</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="features" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Everything you need to automate offers</h2>
            <p className="mt-4 text-lg text-muted-foreground">A complete toolkit for modern HR teams</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10"><f.icon className="h-5 w-5 text-primary" /></div>
                    <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="workflow" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mt-4 text-lg text-muted-foreground">From selection to acceptance in 7 simple steps</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="space-y-12 lg:space-y-24">
              {workflowSteps.map((step, i) => (
                <motion.div key={step.step} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`relative flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="flex-1 w-full">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-4xl font-bold text-muted-foreground/30">{step.step}</span>
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><step.icon className="h-5 w-5 text-primary" /></div>
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground mt-1">{step.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold z-10">{step.step}</div>
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-lg text-muted-foreground">Start free, scale as you grow</p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "$49", desc: "Perfect for small teams", features: ["Up to 20 offers/month", "Basic templates", "Email support", "Standard analytics"] },
              { name: "Professional", price: "$149", desc: "For growing companies", features: ["Unlimited offers", "Custom templates", "Priority support", "Advanced analytics", "API access"], popular: true },
              { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Everything in Pro", "SSO & SAML", "Dedicated CSM", "Custom integrations", "SLA guarantee"] },
            ].map((plan) => (
              <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2"><Badge className="bg-primary text-primary-foreground">Most Popular</Badge></div>}
                <CardContent className="pt-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline"><span className="text-4xl font-bold tracking-tight">{plan.price}</span>{plan.price !== "Custom" && <span className="ml-1 text-muted-foreground">/month</span>}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.desc}</p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {plan.features.map((f) => <li key={f} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" />{f}</li>)}
                  </ul>
                  <Button className="mt-8 w-full" variant={plan.popular ? "default" : "outline"}>{plan.price === "Custom" ? "Contact Sales" : "Start Trial"}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Loved by HR teams worldwide</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6">{t.content}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">{t.name[0]}</div>
                      <div><p className="font-medium text-sm">{t.name}</p><p className="text-xs text-muted-foreground">{t.role}</p></div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="faq" className="py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-16"><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2></div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="py-24">
        <div className="container">
          <div className="rounded-3xl bg-primary px-6 py-16 md:px-16 md:py-24 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Ready to automate your offers?</h2>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">Join hundreds of companies that have reduced their time-to-offer by 70% with OfferFlow AI.</p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={ROUTES.register}><Button size="lg" variant="secondary" className="h-12 px-8 text-base rounded-full">Start Free Trial</Button></Link>
              <Link href={ROUTES.demo}><Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">Try Demo</Button></Link>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t py-12 bg-background">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-bold text-lg"><Zap className="h-5 w-5 text-primary" /><span>OfferFlow AI</span></div>
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} OfferFlow AI. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground"><Link href="#" className="hover:text-foreground">Privacy</Link><Link href="#" className="hover:text-foreground">Terms</Link><Link href="#" className="hover:text-foreground">Contact</Link></div>
        </div>
      </footer>
    </div>
  );
}
