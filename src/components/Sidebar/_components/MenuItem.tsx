"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active: boolean;
  isOpen: boolean | undefined;
  submenus?: string[];
}

export function MenuItem({
  icon: Icon,
  label,
  href,
  active,
  isOpen,
}: MenuItemProps) {
  return (
    <div className="w-full">
      <TooltipProvider disableHoverableContent>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button
              variant={active ? "secondary" : "ghost"}
              className="w-full justify-start h-10 mb-1"
              asChild
            >
              <Link to={href}>
                <span className={cn(isOpen === false ? "" : "mr-4")}>
                  <Icon size={18} />
                </span>
                <p
                  className={cn(
                    "max-w-[200px] truncate",
                    isOpen === false
                      ? "-translate-x-96 opacity-0"
                      : "translate-x-0 opacity-100"
                  )}
                >
                  {label}
                </p>
              </Link>
            </Button>
          </TooltipTrigger>
          {isOpen === false && (
            <TooltipContent side="right">{label}</TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
