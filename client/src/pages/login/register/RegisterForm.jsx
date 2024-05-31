import { useState } from "react";
import { HiOutlineEyeOff } from "react-icons/hi";
import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div id="form-login" className=" w-full">
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
        <div className="mb-4 flex flex-col">
          <label className="text-shadow-title text-[#ffff]">Nombre</label>
          <input
            className="shadow bg-transparent appearance-none border rounded md:w-[400px] py-2 px-2 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label className="text-shadow-title text-[#ffff]">Apellido</label>
          <input
            className="shadow bg-transparent appearance-none border rounded md:w-[400px] py-2 px-2 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="surname"
            type="text"
            placeholder="Apellido"
          />
        </div>
        <div className="flex gap-2  text-[#ffff] text-sm mb-5">
          <p>Ya tienes una cuenta!</p>
          <Link>Inicia sesión</Link>
        </div>
        <div className="mb-4">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            type="submit"
          >
            Iniciar Sesion
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
