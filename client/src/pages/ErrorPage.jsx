import { Link } from "react-router-dom";
import ImageError from "../assets/images/starman_750x750.png";

const ErrorPage = () => {
  return (
    <div className="w-full grid place-items-center min-h-[100svh] bg-primary-50">
      <h1 className="text-primary-500 text-9xl font-extrabold">404</h1>
      <img src={ImageError} alt="Error" className="p-5 sm:p-2" />
      <p className="text-primary-500 font-semibold text-4xl">
        ¡Uy! lo sentimos mucho
      </p>
      <div className="flex">
        <span className="text-secondary-500">Puedes volver al</span>
        <Link
          to="/"
          className="hover:underline hover:text-primary-800 transition-all px-2"
          width={550}
          height={550}
        >
          Inicio
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
