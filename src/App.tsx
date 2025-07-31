import { TagList } from "@/components/ui/tag-list";
import { Header } from "@/components/ui/header";
import { SearchBoxArea } from "@/components/ui/search-box-area";

export default function App() {
  return (
    <main className="dark bg-background min-h-screen text-white">
      <Header title="Worctionary" />
      <SearchBoxArea />
      <TagList title="Trending" />
      <TagList title="For you" />
    </main>
  );
}
