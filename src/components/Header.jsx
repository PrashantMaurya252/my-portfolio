
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex md:justify-end md:gap-6 justify-center gap-4 p-6 bg-gray-600 text-white">
      <Link to="/" className="text-lg font-semibold hover:text-red-600">
        Home
      </Link>
      <Link to="/about"  className="text-lg font-semibold hover:text-red-600">About</Link>
      <Link to="/projects"  className="text-lg font-semibold hover:text-red-600">Projects</Link>
    </div>
  );
}

export default Header;
