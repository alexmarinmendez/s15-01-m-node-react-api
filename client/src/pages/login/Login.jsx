import FormLoginContainer from "./formLogin/FormLoginContainer";

function Login() {
  return (
    <div className="overflow-hidden bg-[#2C3E50]">
      <div className="w-full h-screen md:w-screen md:h-screen flex justify-center items-center">
        <FormLoginContainer />
      </div>
    </div>
  );
}
export default Login;
