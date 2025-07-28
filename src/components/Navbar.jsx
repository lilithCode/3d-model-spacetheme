import { useLocation } from "react-router-dom";
import { useNavigation } from "./NavigationContext";

const Navbar = () => {
  const location = useLocation();
  const { navigate } = useNavigation();

  if (location.pathname === "/") return null;

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md flex justify-between items-center z-50">
      <button
        onClick={() => navigate("/")}
        className="text-xl font-bold ml-6 cursor-pointer"
      >
        <img src="/logo.svg" alt="Logo" className="h-10 w-auto sm:h-8" />
      </button>
      <div className="flex gap-6 mr-6 text-2xl sm:text-xl">
        {["about", "projects", "skills", "contact"].map((page) => (
          <button
            key={page}
            onClick={() => navigate(`/${page}`)}
            className="hover:text-[#B069DB] cursor-pointer"
            aria-label={`Go to ${page}`}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
