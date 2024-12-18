import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { clsx } from 'clsx';

interface NavLinkProps {
  to: string;
  icon: LucideIcon;
  children: React.ReactNode;
  collapsed?: boolean;
}

export function NavLink({ to, icon: Icon, children, collapsed }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={clsx(
        'flex items-center gap-3 px-4 py-2 rounded-lg',
        'hover:bg-[#0A0A0B]',
        isActive && 'text-[#FF7E39] bg-[#FF7E39]/10',
        collapsed && 'justify-center'
      )}
    >
      <Icon className="w-5 h-5" />
      {!collapsed && <span>{children}</span>}
    </Link>
  );
}