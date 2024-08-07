import Appbar from "../components/Appbar";
import { Outlet } from "react-router";

export default function Root() {
  return (
    <>
      <div id="detail">
      <Appbar />
        <Outlet />
      </div>
    </>
  );
}
