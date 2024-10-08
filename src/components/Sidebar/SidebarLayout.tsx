"use client";

import { cn } from "@/lib/utils";
import { useSidebarToggle } from "./_components/hooks/useSidebarToggle";
import { useStore } from "./_components/hooks/useSidebarStore";
import { Sidebar } from "./Sidebar";

export default function SidebarLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const sidebar = useStore(useSidebarToggle, (state) => state);

  if (!sidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[70px]" : "lg:ml-[17.5rem]"
        )}
      >
        {children}
      </main>

    </>
  );
}
