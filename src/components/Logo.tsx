import { Link } from "react-router";

export default function Logo() {
  return (
    <div className="logo">
      <Link className="logoLink" to="/recipes">
        Click to get recipes...
      </Link>
    </div>
  );
}
