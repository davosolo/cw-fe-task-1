import { SearchBox } from "@/components/ui/search-box";
import { cn } from "@/lib/utils";

function SearchBoxArea({ className }: { className?: string }) {
  const onSearch = (search: string) => {
    if (search?.length < 3) return;

    console.log(search);
    // implementing the search logic is not required for this task
  };

  return (
    <div
      className={cn(
        "relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden mt-8",
        className
      )}
    >
      <img alt="Abstract background" className="w-full h-96 object-cover" src="/task1/hero-bg.png" />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Search for words, phrases and meanings
        </h1>
        <SearchBox onSearch={onSearch} />
      </div>
    </div>
  );
}

export { SearchBoxArea };
