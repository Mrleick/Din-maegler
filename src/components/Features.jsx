import React from "react";
import feature1 from "../assets/feature1.png";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";

function Features() {
  return (
    <div className="grid grid-cols-3 gap-[30px] max-w-[1110px] mt-[70px] mb-[120px] mx-auto">
      <div className="flex gap-[12px]">
        <div className="flex w-[50px] h-[50px] justify-center items-center bg-shape2">
          <img className="block w-[30px]" src={feature1} alt="" />
        </div>
        <div>
          <h3 className="text-[24px] font-medium">Bestil et salgstjek</h3>
          <p className="text-[18px] mt-[16px] max-w-[290px]">
            Med et Din Mægler Salgstjek bliver du opdateret på værdien af din
            bolig.
          </p>
        </div>
      </div>

      <div className="flex gap-[12px]">
        <div className="flex w-[50px] h-[50px] justify-center items-center bg-shape2">
          <img className="block w-[30px] h-[30px]" src={feature2} alt="" />
        </div>
        <div>
          <h3 className="text-[24px] font-medium">74 butikker</h3>
          <p className="text-[18px] mt-[16px] max-w-[290px]">
            Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som
            er fordelt rundt om i Danmark.
          </p>
        </div>
      </div>

      <div className="flex gap-[12px]">
        <div className="flex w-[50px] h-[50px] justify-center items-center bg-shape2">
          <img className="block w-[30px]" src={feature3} alt="" />
        </div>
        <div>
          <h3 className="text-[24px] font-medium">Tilmeld køberkartotek</h3>
          <p className="text-[18px] mt-[16px] max-w-[290px]">
            Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en
            ny bolig bliver annonceret.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
