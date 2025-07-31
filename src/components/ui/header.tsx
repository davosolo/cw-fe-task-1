import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type HeaderProps = {
  className?: string;
  title: string;
};

function Header({ className, title }: HeaderProps) {
  return (
    <header
      aria-label="Worctionary header"
      className={cn(
        "dark flex items-center justify-between pl-10 pr-10 py-3 bg-background border-b-2 border-gray-800",
        className
      )}
    >
      <div className="flex items-center gap-8">
        <img alt="Worctionary logo" className="w-4 h-4" src="/task1/logo.png" />
        <h1 className="text-white font-semibold text-lg">{title}</h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative">
          <span aria-label="Search icon" className="absolute left-3 top-2.5">
            <Search className="text-gray-400 text-sm" />
          </span>
          <Input
            aria-label="Search input"
            className="pl-10 bg-gray-800 text-white border-none focus:ring-0 rounded-md h-10 w-40"
            placeholder="Search"
            role="searchbox"
            type="search"
          />
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage alt="User avatar" src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

export { Header };
