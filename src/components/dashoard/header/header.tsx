import { SidebarTrigger } from "@/components/ui/sidebar";
import { DynamicBreadcrumb } from "@/components/dashboard-ui/breadcrumbs/breadcrumb";

export default function Header() {
  return (
    <header className="flex items-center gap-4 p-2 border-b">
      <div className="border-r h-full px-2">
        <SidebarTrigger className="-ml-2" />
      </div>
      <DynamicBreadcrumb />
    </header>
  );
}
