import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-24 py-10">
        <Link to={"/"} className="text-2xl font-bold">
          AiCode
        </Link>
        <ul className="flex items-center gap-x-3 text-base">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <Link
              to={"/code"}
              className="px-3 py-2 bg-black text-white rounded-md"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
