import Link from "next/link";
import { LayoutDashboard, Users, HeartPulse, ShieldAlert, Settings, FileText, LogOut } from "lucide-react";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarLinks = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Users Management", href: "/admin/users", icon: <Users className="w-5 h-5" /> },
    { name: "Doctors", href: "/admin/doctors", icon: <HeartPulse className="w-5 h-5" /> },
    { name: "Int. Cases", href: "/admin/cases", icon: <ShieldAlert className="w-5 h-5" /> },
    { name: "Blog CMS", href: "/admin/blog", icon: <FileText className="w-5 h-5" /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-primary">
          <span className="font-bold text-xl tracking-tight text-white">
            Toplife<span className="text-white/80">AI</span> <span className="text-xs uppercase ml-1 opacity-70">Admin</span>
          </span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              {link.icon}
              <span className="font-medium text-sm">{link.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-slate-400 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 md:hidden">
          <span className="font-bold text-xl tracking-tight">Admin Portal</span>
        </header>
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
