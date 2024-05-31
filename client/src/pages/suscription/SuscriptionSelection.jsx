import { MdCheckCircleOutline } from "react-icons/md";
import Buttons from "../../components/Buttons";
function SuscriptionSelection() {
  return (
    <div id="suscription-selection" className="w-[300px] md:w-[100%]">
      <div className="flex flex-col md:flex-row gap-[35px] justify-center items-center">
        <div className="bg-[#BEC3C9] p-5 md:w-[428px] md:h-[376px] rounded-[10px] border-[1px] hover:border-[#F7786B] hover:border-2">
          <div className="text-center">
            <h2 className="text-xl font-medium leading-[32px]">
              Prueba gratis
            </h2>
            <hr className="h-px mx-auto my-px bg-gray-400 border-0" />
            <div className="flex justify-center items-center">
              <p className="text-[32px] font-semibold mr-2">$0</p>
              <p className="text-[20px] font-medium">/mes</p>
            </div>
          </div>
          <div id="checkbox-list">
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Transmisión en alta calidad</span>
            </div>
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Con anuncios</span>
            </div>
            <div className="flex items-center gap-2 h-[48px] invisible">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Transmisión en alta calidad</span>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Buttons variant="primary"> Elige este plan </Buttons>
          </div>
        </div>
        <div className="bg-[#BEC3C9] p-5 md:w-[428px] md:h-[376px] rounded-[10px] border-[1px] hover:border-[#F7786B] hover:border-2">
          <div className="text-center">
            <h2 className="text-xl font-medium leading-[32px]">
              Suscripción mensual
            </h2>
            <hr className="h-px mx-auto my-px bg-gray-400 border-0" />
            <div className="flex justify-center items-center">
              <p className="text-[32px] font-semibold mr-2">$0</p>
              <p className="text-[20px] font-medium">/mes</p>
            </div>
          </div>
          <div id="checkbox-list">
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Transmisión en alta calidad</span>
            </div>
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Repdorducción en varios dispositivos</span>
            </div>
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>30 descargas para disfrutar offline</span>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Buttons variant="primary"> Elige este plan </Buttons>
          </div>
        </div>
        <div className="bg-[#BEC3C9] p-5 md:w-[428px] md:h-[376px] rounded-[10px] border-[1px] hover:border-[#F7786B] hover:border-2">
          <div className="text-center">
            <h2 className="text-xl font-medium leading-[32px]">
              Suscripción anual
            </h2>
            <hr className="h-px mx-auto my-px bg-gray-400 border-0" />
            <div className="flex justify-center items-center">
              <p className="text-[32px] font-semibold mr-2">$0</p>
              <p className="text-[20px] font-medium">/mes</p>
            </div>
          </div>
          <div id="checkbox-list">
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Transmisión en alta calidad</span>
            </div>
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>Reproducción de varios dispositivos</span>
            </div>
            <div className="flex items-center gap-2 h-[48px]">
              <MdCheckCircleOutline className="text-[23.33px]" />
              <span>100 descargas para disfrutar offline</span>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Buttons variant="primary"> Elige este plan </Buttons>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-10">
        <Buttons variant="primary" className="font-thin">
          Continuar
        </Buttons>
      </div>
    </div>
  );
}

export default SuscriptionSelection;
