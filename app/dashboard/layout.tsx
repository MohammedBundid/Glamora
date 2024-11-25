import Sidebar from "../components/dashboard/Sidebar"
import './dashboard.css'

const DashBoardlayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className="w-full min-h-screen flex">
        <Sidebar />
        {children}
    </div>
  )
}

export default DashBoardlayout