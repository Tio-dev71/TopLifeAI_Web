import Link from "next/link";
import { Activity, FileText, Home, Settings, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarLinks = [
    { name: "Overview", href: "/dashboard", icon: <Home className="w-5 h-5" /> },
    { name: "Activity", href: "/dashboard/activity", icon: <Activity className="w-5 h-5" /> },
    { name: "Health Records", href: "/dashboard/records", icon: <FileText className="w-5 h-5" /> },
    { name: "Settings", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 border-b">
          <span className="font-bold text-xl tracking-tight">
            Toplife<span className="text-primary">AI</span>
          </span>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2">
          {sidebarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            >
              {link.icon}
              <span className="font-medium text-sm">{link.name}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 md:hidden">
          <span className="font-bold text-xl tracking-tight">
            Toplife<span className="text-primary">AI</span>
          </span>
          {/* Mobile menu button placeholder */}
        </header>
        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
