import Card from "./Card";

const Tendency = () => {
  return (
    <div className="">
      <h1 className="flex justify-center text-white text-2xl md:text-4xl font-semibold text-center">
        En tendencia
      </h1>
      <h2 className="flex justify-center text-white text-center text-xl md:text-2xl font-normal p-4">
        Explorá nuestro contenido destacado
      </h2>
      <div className="scroll-container overflow-x-auto flex md:justify-center mx-2 md:px-20">
        <Card />
      </div>
    </div>
  );
};

export default Tendency;
