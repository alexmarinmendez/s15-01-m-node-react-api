function SuscriptionHeader() {
  return (
    <div id="suscription-header" className="w-[300px] md:w-full">
      <div
        id="suscription-header-titleBrand"
        className="flex w-full justify-start items-start"
      >
        <h2 className="flex justify-start items-start md:text-[40px] text-[#ffff] font-semibold md:ml-5 mt-2">
          Indie Zone
        </h2>
      </div>
      <div className="h-[120px] mt-5">
        <h1 className="text-[24px] md:text-[46px] text-[#ffff] font-semibold text-center">
          Elige tu Plan
        </h1>
      </div>
    </div>
  );
}

export default SuscriptionHeader;
