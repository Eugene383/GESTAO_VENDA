"use client";
import { LayoutDashboard, Package, ShoppingCart, Settings, LogOut, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonLogOut from "@/components/button-logout"
import { useSession } from 'next-auth/react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Package, label: 'Produtos', href: '/dashboard/products' },
  { icon: ShoppingCart, label: 'Vendas', href: '/dashboard/vendas' },
  { icon: Users, label: 'Clientes', href: '/dashboard/clients' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const {data: session} = useSession()
    const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-bold text-white"><Link href={"/"}>Nexus</Link></h1>
        <p className="text-xs text-slate-400">
          {session?.user?.email}
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <div className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <ButtonLogOut/>
        </div>
      </div>
    </aside>
  );
}
