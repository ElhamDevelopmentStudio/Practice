import { cn } from "@/lib/utils";
import { useSidebarToggle } from "./_components/hooks/useSidebarToggle";
import { SidebarToggle } from "./_components/SidebarToggle";
import { Menu } from "./_components/Menu";
import { useStore } from "./_components/hooks/useSidebarStore";
import { Separator } from "../ui/separator";
import { UserItem } from "./_components/UserItem";


export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  
  if(!sidebar) return null;

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-[17.5rem]"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full flex flex-col p-3 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <UserItem isOpen={sidebar?.isOpen} />
        <Separator className="w-full mt-2"  />
        <Menu isOpen={sidebar?.isOpen} />
      </div>
    </aside>
  );
}
