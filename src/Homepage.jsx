import "./App.scss";
import SearchParent from "./SearchParent";

export default function Homepage() {
  return (
    <>
      <h1 className="homepage_headline">
        Searchazar: The #1 Image Search Site on the Planet
      </h1>
      <SearchParent />
    </>
  );
}
