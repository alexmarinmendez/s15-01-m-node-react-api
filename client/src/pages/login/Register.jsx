import RegisterFormContainer from "./register/RegisterFormContainer";

function Register() {
  return (
    <div className="overflow-hidden bg-[#2C3E50]">
      <div className="w-full h-screen md:w-screen md:h-screen flex justify-center items-center">
        <RegisterFormContainer />
      </div>
    </div>
  );
}

export default Register;
