import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SubpageLayout from "./SubpageLayout";
import AuthorDetail from "./AuthorDetails";

export default function RoutesSwitch({ AUTHOR_USERNAME }) {
  return (
    <>
      <div className="routes">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/" element={<SubpageLayout />}>
            <Route
              path="/author/:AUTHOR_USERNAME"
              element={<AuthorDetail AUTHOR_USERNAME={AUTHOR_USERNAME} />}
            />
            <Route path="*" element="404: page not found &#128561;" />
          </Route>
        </Routes>
      </div>
    </>
  );
}
