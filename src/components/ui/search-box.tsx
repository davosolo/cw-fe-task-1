import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SearchBoxProps = {
  className?: string;
  initialValue?: string;
  onSearch: (search: string) => void;
};

function SearchBox({ className, initialValue = '', onSearch }: SearchBoxProps) {
  const [searchInput, setSearchInput] = useState(initialValue);

  useEffect(() => {
    onSearch(searchInput);
  }, [searchInput, onSearch]);

  useEffect(() => {
    setSearchInput(initialValue);
  }, [initialValue]);

  return (
    <div
      className={cn(
        "bg-background flex items-center px-4 py-2 rounded-md w-full max-w-xl h-16 mt-6 shadow-lg",
        className
      )}
    >
      <Search className="text-gray-400 mr-3" />
      <Input
        aria-label="Search for words, phrases and meaning"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="search"
        placeholder="Type to search..."
        className="flex-1 dark:bg-background border-none text-white focus:ring-0"
      />
      <Button className="bg-[#1A80E5] hover:bg-blue-700 text-white ml-4">
        Search
      </Button>
    </div>
  );
}

export { SearchBox };