import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SubpageLayout from "./SubpageLayout";
import AuthorDetail from "./AuthorDetails";

export default function RoutesSwitch() {
  return (
    <>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/" element={<SubpageLayout />}>
            <Route path="/author/:username" element={<AuthorDetail />} />
            <Route path="*" element="404: page not found &#128561;" />
          </Route>
        </Routes>
      </div>
    </>
  );
}
