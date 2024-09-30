import { ModeToggle } from "./_components/ModeToggle"
import SidebarLayout from "./SidebarLayout"

const AdminPanel = () => {
  return (
    
    <SidebarLayout>
      <div className=" justify-between items-center ml-20 mt-10">
        <ModeToggle />

      </div>
    </SidebarLayout>
  
  )
}

export default AdminPanel
