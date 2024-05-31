import Card from "./Card";

const Banner = () => {
  return (
    <div>
      <span className="flex justify-center text-center text-white text-2xl md:text-5xl my-14">
        En Indi’Zone disfrutas de cortometrajes y producciones únicas y
        originales
      </span>

      <div className="scroll-container overflow-x-auto flex md:justify-center mx-2 md:px-20">
        <Card />
      </div>
    </div>
  );
};

export default Banner;
