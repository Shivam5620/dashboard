import { dashboardRoutes } from '@/lib';
import { redirect } from 'next/navigation';

export default function Page() {
  redirect(dashboardRoutes.dashboard);
}
