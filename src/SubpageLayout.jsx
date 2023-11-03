import { Link, Outlet } from "react-router-dom";

export default function SubpageLayout() {
  return (
    <div className="layout">
      <Link to="/">&#127968; Back to home</Link>
      <div className="layout__content">
        <Outlet />
      </div>
    </div>
  );
}
