import RegisterForm from "./RegisterForm";

function RegisterFormContainer() {
  return (
    <div
      id="form-login-container"
      className="flex flex-col justify-center items-center w-[300px] md:w-[40%] md:max-h-[95%] gap-10 background-conic p-10 rounded-xl shadow-lg"
    >
      <h1 className="text-3xl text-shadow-title text-[#ffff]">
        Crear una cuenta
      </h1>
      <RegisterForm />
    </div>
  );
}

export default RegisterFormContainer;
