import { Link } from "react-router-dom";
import { HiOutlineEyeOff } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import Buttons from "../../../components/Buttons";
import { useState } from "react";
function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div id="form-login" className="">
      <form
        className="flex flex-col gap-2 justify-center items-center"
        action="#"
      >
        <div className="mb-4 flex flex-col">
          <label className="text-shadow-title text-[#ffff]">
            Correo electrónico
          </label>
          <input
            className="shadow bg-transparent appearance-none border rounded md:w-[400px] py-2 px-2 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="text-shadow-title text-[#ffff]">Constaseña</label>
          <div className="shadow bg-transparent appearance-none border rounded md:w-[400px] py-2 px-2 text-white leading-tight focus:outline-none focus:shadow-outline flex justify-between items-center">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="*********"
              inputMode=""
              className="bg-transparent appearance-none border-none w-full text-white leading-tight focus:outline-none focus:shadow-outline"
            />
            {showPassword ? (
              <HiOutlineEye
                className="text-[#ffff] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <HiOutlineEyeOff
                className="text-[#ffff] cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <div>
          <Buttons variant="primary" type="submit">
            Iniciar Sesion
          </Buttons>
        </div>
      </form>
      <div className="flex justify-center mt-8">
        <p className="mr-2 text-[#ffff]">No tienes cuenta?</p>
        <Link className="text-[#ffff]" to="/register">
          Registrate
        </Link>
      </div>
    </div>
  );
}

export default FormLogin;
