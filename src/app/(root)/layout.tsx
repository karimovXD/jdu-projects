import Header from "@/components/dashoard/header/header";
import { AppSidebar } from "@/components/dashoard/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import styles from "@/styles/dashboard.module.scss";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className={"h-full w-full flex flex-col"}>
          <Header />
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
