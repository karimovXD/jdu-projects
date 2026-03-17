"use client";
import { useState, useMemo } from "react";
import { SearchForm } from "@/components/dashoard/sidebar/search-form";
import { data } from "./sidebar.data";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeButton } from "@/components/dashboard-ui/buttons/theme-button/ThemeButton";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const filtered = useMemo(() => {
    if (!query) return data;
    const q = query.toLowerCase();
    return data
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          item.title.toLowerCase().includes(q),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex items-center flex-row gap-1 w-full">
        <SearchForm onSearch={setQuery} debounceMs={2000} />
        <ThemeButton />
      </SidebarHeader>
      <SidebarContent>
        {filtered.length === 0 ? (
          <div className="px-4 py-6 text-sm text-muted-foreground text-center">
            No results for "{query}"
          </div>
        ) : (
          filtered.map((section) => (
            <SidebarGroup key={section.title}>
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.url}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
