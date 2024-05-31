import { Link } from "react-router-dom";
import Buttons from "../../components/Buttons";

const Navbar = () => {
  return (
    <nav className="bg-primary-500 p-6 flex justify-between items-center">
      <div className="md:text-4xl font-semibold text-white">
        <Link to="/">Indie Zone</Link>
      </div>
      <div className="md:space-x-4">
        <Link to="/login">
          <Buttons variant="tertiary">Acceder</Buttons>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
