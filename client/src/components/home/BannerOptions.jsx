import imageOptions from "../../assets/images/imageDispositives.png";

const BannerOptions = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="py-10 md:py-36 px-4 md:px-20 pb-1">
        <h1 className="text-white font-semibold text-2xl md:text-4xl pb-6 text-center">
          Disfrutá donde quieras
        </h1>
        <h2 className="text-white text-lg md:text-2xl text-center">
          Cortometrajes y animaciones desde tu teléfono, tablet o computadora
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-1/2 md:w-3/4" src={imageOptions} alt="imagen" />
      </div>
    </div>
  );
};

export default BannerOptions;
