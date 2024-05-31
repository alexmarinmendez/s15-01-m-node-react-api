const UploadMovie = () => {
  return (
    <div>
      <h1 className="flex justify-center text-white text-2xl md:text-4xl font-semibold p-10">
        Sube tu película
      </h1>
      <h2 className="flex justify-center text-white text-lg md:text-2xl font-normal px-4 md:px-60 text-center">
        Comparte tu producción con el resto del mundo. En Indi’Zone puedes ver
        el crecimiento de tus producciones
      </h2>

      <div className="md:grid md:grid-cols-2 px-2 md:px-20 py-4 md:py-10 gap-2 md:gap-6">
        <div className="flex flex-col bg-white rounded p-4 my-4">
          <span className="text-regular text-lg text-primary-800 font-normal">
            Reproducciones
          </span>
          <span className="text-primary-800 font-medium text-3xl">50</span>
          <span className="text-base text-normal text-primary-800">
            +15 desde el mes pasado
          </span>
        </div>

        <div className="flex flex-col bg-white rounded p-4 my-4">
          <span className="text-regular text-lg text-primary-800 font-normal">
            Comentarios
          </span>
          <span className="text-primary-800 font-medium text-3xl">125</span>
          <span className="text-base text-normal text-primary-800">
            +2.345 Total
          </span>
        </div>

        {/* Contenedor Peliculas */}
        <div className="col-span-2 flex justify-center items-center">
          <div className="md:bg-white pl-2 md:pr-[500px] rounded py-4 md:py-10">
            <div className="pb-6">
              <span className="text-white md:text-primary-800 font-medium text-2xl">
                Top Géneros
              </span>
              <span className="text-white md:text-primary-800 font-medium text-xl block">
                Número de películas
              </span>
            </div>
            <div className="flex justify-center items-end h-64 space-x-2">
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-64"></div>
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-24"></div>
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-48"></div>
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-40"></div>
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-16"></div>
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-56"></div>
              <div className="bg-white md:bg-secondary-400 w-10 md:w-20 h-36"></div>
            </div>
            <div className="flex justify-end text-primary-800 text-[16px] font-normal">
              Género
            </div>
          </div>
        </div>
      </div>
      <h1 className="flex justify-center text-white text-2xl md:text-4xl font-semibold text-center">
        Valoraciones
      </h1>
      <h2 className="flex justify-center text-white text-lg md:text-2xl px-4 md:px-60 font-normal p-4 text-center">
        Brindamos el espacio para que los usuarios puedan calificar sus
        cortometrajes y animaciones.
      </h2>
    </div>
  );
};

export default UploadMovie;
