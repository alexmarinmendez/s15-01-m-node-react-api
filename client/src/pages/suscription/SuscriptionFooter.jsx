function SuscriptionFooter() {
  return (
    <div
      id="suscription-footer"
      className="flex justify-center items-center h-full w-[300px] md:w-full"
    >
      <div
        id="suscription-footer-container"
        className="flex flex-col justify-center items-center h-[60px] text-[#ffff]"
      >
        <p className="text-[15px] font-[400] text-center pt-10 mb-2">
          © 2023 Indie Zone. Todos los derechos reservados.
        </p>
        <p className="text-[15px] font-[400] mb-10">Política de Privacidad</p>
      </div>
    </div>
  );
}

export default SuscriptionFooter;
