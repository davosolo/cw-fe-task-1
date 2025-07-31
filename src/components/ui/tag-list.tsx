import { cn } from "@/lib/utils";
import { Badge } from "./badge";
import { useEffect, useState } from "react";
import { fetchTags } from "@/api/tags";

type TagListProps = {
  className?: string;
  title: string;
};

function TagList({ className, title }: TagListProps) {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    fetchTags(title).then((tags) => setTags(tags));
  }, [title]);

  return (
    <div className={cn("mt-8 px-6 max-w-5xl mx-auto", className)}>
      <h1 className="text-white text-lg font-semibold mb-4">{title}</h1>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <Badge
            key={`${tag}-${index}`}
            className="bg-badge-background text-white hover:bg-gray-700 cursor-pointer h-8 px-4"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export { TagList };
