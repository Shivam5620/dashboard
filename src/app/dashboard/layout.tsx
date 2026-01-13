'use client';

import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { SideBar } from '../components/common/SideBar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen p-3">
      <SidebarProvider>
        <SideBar />
        <main className="flex-1 overflow-auto">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
