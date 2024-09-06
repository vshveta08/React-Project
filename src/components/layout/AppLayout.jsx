import { Outlet } from "react-router-dom";
import HorizontalNav from "./HorizontalNav";

export default function AppLayout() {
  return (
    <div>
      <HorizontalNav />
      <Outlet />
    </div>
  )
}
