import FormLogin from "./FormLogin";

function FormLoginContainer() {
  return (
    <div
      id="form-login-container"
      className="flex flex-col justify-center items-center w-[300px] md:w-[40%] md:h-[70%] gap-10 background-conic p-10 rounded-xl shadow-lg"
    >
      <h1 className="text-3xl text-shadow-title text-[#ffff]">
        Iniciar Sesión
      </h1>
      <FormLogin />
    </div>
  );
}

export default FormLoginContainer;
