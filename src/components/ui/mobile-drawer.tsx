import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

function MobileDrawer() {
  return (
    <Sidebar
      collapsible="offcanvas"
      side="right"
      variant="sidebar"
    >
      <SidebarContent className="dark bg-background text-white">
        <SidebarHeader className="flex-row justify-between w-full">
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
        </SidebarHeader>
      </SidebarContent>
    </Sidebar>
  )
}

export { MobileDrawer }
