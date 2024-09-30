import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavbarProps {
  userName: string;
  userImage: string;
}

export default function Navbar({ userName, userImage }: NavbarProps) {
  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-sm">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src={userImage} alt={userName} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-sm ">{userName}</p>
          <p className="text-sm text-muted-foreground ">
            Welcome back to Apex 👋
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          {isSearchOpen ? (
            <>
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 w-[200px]"
                // onBlur={() => setIsSearchOpen(false)}
              />
            </>
          ) : (
            <button onClick={() => setIsSearchOpen(true)}>
              <Search className="text-muted-foreground h-6 w-6" />
            </button>
          )}
        </div>
        <button className="relative">
          <Bell className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </nav>
  );
}
