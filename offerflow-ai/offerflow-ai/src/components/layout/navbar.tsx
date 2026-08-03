"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES, APP_NAME } from "@/lib/constants";
const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#workflow", label: "Workflow" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];
export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isLanding = pathname === "/";
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"><Zap className="h-5 w-5" /></div>
          <span>{APP_NAME}</span>
        </Link>
        {isLanding && (
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">{link.label}</Link>)}
          </nav>
        )}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="rounded-full">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          {isLanding ? (
            <div className="hidden md:flex items-center gap-3">
              <Link href={ROUTES.login}><Button variant="ghost" size="sm">Log in</Button></Link>
              <Link href={ROUTES.register}><Button size="sm">Get Started</Button></Link>
            </div>
          ) : null}
          {isLanding && (
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</Button>
          )}
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && isLanding && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-b bg-background overflow-hidden">
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground" onClick={() => setMobileOpen(false)}>{link.label}</Link>)}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Link href={ROUTES.login}><Button variant="outline" className="w-full">Log in</Button></Link>
                <Link href={ROUTES.register}><Button className="w-full">Get Started</Button></Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
