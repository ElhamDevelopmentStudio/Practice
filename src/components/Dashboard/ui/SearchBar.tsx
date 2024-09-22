import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronDownIcon,
  FilterIcon,
  LayersIcon,
  StarIcon,
} from "lucide-react";

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pr-10"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <div className="grid grid-cols-3 divide-x">
            <div className="p-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <FilterIcon className="mr-2 h-4 w-4 text-[#714b67]" fill />
                Filters
              </h3>
              <ul className="space-y-2">
                <li>My Appointments</li>
                <li>Recurring</li>
                <li>Punctual</li>
                <li>Any Time</li>
                <li>Published</li>
                <li>Archived</li>
                <li>Add Custom Filter</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <LayersIcon className="mr-2 h-4 w-4 text-green-900" />
                Group By
              </h3>
              <ul className="space-y-2">
                <li>Timezone</li>
                <li>Website</li>
                <li>Published</li>
                <li>Type</li>
                <li>Add Custom Group</li>
              </ul>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <StarIcon
                  className="mr-2 h-4 w-4 text-yellow-500"
                  fillRule="inherit"
                />
                Favorites
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-between">
                  Public Appointments
                </li>
                <li>Save current search</li>
              </ul>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
