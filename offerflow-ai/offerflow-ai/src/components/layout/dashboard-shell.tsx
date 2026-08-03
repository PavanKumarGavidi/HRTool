"use client";
import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";
interface DashboardShellProps { children: React.ReactNode; className?: string; }
export function DashboardShell({ children, className }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <Sidebar />
      <main className={cn("flex-1 pl-64 transition-all duration-300", className)}>
        <div className="container py-8 px-6">{children}</div>
      </main>
    </div>
  );
}
