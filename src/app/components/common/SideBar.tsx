'use client';
import {
  Home,
  Users,
  CircleDotDashed,
  User2,
  ChevronUp,
  ChevronRightCircle,
} from 'lucide-react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { dashboardRoutes } from '@/lib';
import Image from 'next/image';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    href: dashboardRoutes.dashboard,
    icon: Home,
  },
  {
    title: 'Coils',
    href: dashboardRoutes.coils,
    icon: CircleDotDashed,
  },
  {
    title: 'Coil Processes',
    href: dashboardRoutes.coilProcesses,
    icon: ChevronRightCircle,
  },
  {
    title: 'Users',
    href: dashboardRoutes.users,
    icon: Users,
  },
];

export function SideBar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <Link
              href={dashboardRoutes.dashboard}
              className="items-center justify-center mx-auto"
            >
              <Image
                alt="coilsLogoAndText"
                height={15}
                priority
                className="cursor-pointer w-auto px-2 z-10 py-2"
                src="/assets/logo.png"
                width={100}
              />
            </Link>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="text-2xl font-bold mt-2 hover:bg-gray-200 rounded-lg p-3"
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.href} className="flex items-center gap-4">
                      <item.icon className="w-6 h-6" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <User2 /> User Name
            <ChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          className="w-[--radix-popper-anchor-width]"
        >
          <DropdownMenuItem>
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Sidebar>
  );
}
