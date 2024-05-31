import { Link } from "react-router-dom";
import Buttons from "../Buttons";

const HomeTitle = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-white text-5xl font-semibold text-center pt-6">
        Indie Zone
      </h1>
      <h2 className="font-medium text-2xl text-center text-white p-4">
        Descubre y comparte películas y animaciones con el resto del mundo
      </h2>
      <div className="flex justify-center p-6">
        <Link to="/suscription">
          <Buttons variant="secondary">Suscríbete</Buttons>
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
