import { TagList } from "@/components/ui/tag-list"
import { Header } from "@/components/ui/header"
import { SearchBoxArea } from "@/components/ui/search-box-area"
import { SidebarProvider } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { MobileDrawer } from "@/components/ui/mobile-drawer"

export default function App() {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider className="block" defaultOpen={isMobile}>
      <main className="dark bg-background min-h-screen text-white">
        <MobileDrawer />
        <Header title="Worctionary" />
        <SearchBoxArea />
        <TagList title="Trending" />
        <TagList title="For you" />
      </main>
    </SidebarProvider>
  );
}
