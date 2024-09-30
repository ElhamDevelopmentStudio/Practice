"use client";

import {   ChevronsUpDown } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface UserItemProps {
  isOpen?: boolean;
}

export const UserItem = ({ isOpen  }: UserItemProps) => {


  return (
    <DropdownMenu>
     
      <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
            <motion.div
                role="button"
                className={cn(
                  "flex items-center text-sm p-3 w-full dark:bg-[#1f1f1f] hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 border-gray-200 dark:border-gray-700",
                  isOpen === false ? "justify-center" : "justify-between"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
          <div className="flex items-center gap-x-2 max-w-[150px]">
            <Avatar className="h-8 w-8 rounded-full ring-2 ring-primary">
              <AvatarImage
                src="/logo.svg"
                alt={`Nadia Noorzai's avatar`}
              />
            </Avatar>
            {isOpen !== false && (
                    <span className="text-start font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
                      Nadia Noorzai
                    </span>
                  )}
          </div>
          {isOpen !== false && (
                  <ChevronsUpDown className="ml-2 text-gray-500 dark:text-gray-400 h-5 w-5" />
                )}
        </motion.div>
        </DropdownMenuTrigger>
        </TooltipTrigger>
            {isOpen === false && (
              <TooltipContent side="right">
                Nadia Noorzai
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      
      <DropdownMenuContent
          className="w-80 p-4 bg-white dark:bg-[#1f1f1f] rounded-lg shadow-lg transition-transform duration-200 transform origin-top-left border border-gray-900 dark:border-gray-700"
          align="start"
          alignOffset={10}
          forceMount
        >
        <div className="flex flex-col space-y-4">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 leading-none">
            test@test.com
          </p>
          <div className="flex items-center gap-x-2 p-2  dark:bg-gray-700 rounded-md">
            <Avatar className="h-12 w-12 rounded-full ring-2 ring-secondary">
              <AvatarImage
                src={`/logo.svg`}
                alt={`Nadia Noorzai's avatar`}
              />
            </Avatar>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-1">
               Nadia Noorzai
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator className="my-2 border-t border-gray-200 dark:border-gray-700" />

        <DropdownMenuItem
          className="w-full cursor-pointer text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md p-2 transition-colors duration-200"
          asChild
        >
          <Button variant="outline" className="text-black dark:text-white">Sign out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};