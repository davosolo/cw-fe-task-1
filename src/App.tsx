import { useEffect, useState } from "react";
import { TagList } from "@/components/ui/tag-list";
import { Header } from "@/components/ui/header";
import { SearchBoxArea } from "@/components/ui/search-box-area";
import { fetchTags } from "@/api/tags";

export default function App() {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    fetchTags().then((tags) => setTags(tags));
  }, []);

  return (
    <main className="dark bg-background min-h-screen text-white">
      <Header title="Worctionary" />
      <SearchBoxArea />
      <TagList title="Trending" tags={tags || []} />
      <TagList title="For you" tags={tags || []} />
    </main>
  );
}
