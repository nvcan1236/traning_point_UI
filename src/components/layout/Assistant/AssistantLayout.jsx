import { Outlet } from "react-router-dom";
import AssistantHeader from "./AssistantHeader";
import AssistantNavbar from "./AssistantNavbar";

export default function AssistantLayout() {
  return (
    <div className="flex">
      <AssistantNavbar></AssistantNavbar>
      <div className="flex-1 px-8">
        <AssistantHeader />
        <Outlet />
      </div>
    </div>
  )
}
