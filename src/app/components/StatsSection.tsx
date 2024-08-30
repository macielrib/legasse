"use client"; // Certifica que o componente é um Client Component

import { GrMap } from "react-icons/gr";
import { RiDoorOpenLine } from "react-icons/ri";
import Counter from "./Counter";

const StatsSection: React.FC = () => {
  return (
    <div className="absolute inset-x-0 bottom-[-0rem] mx-auto max-w-xl bg-[#101010] p-6 rounded-xl shadow-lg flex justify-between items-center space-x-6 transform translate-y-1/2 transition duration-300 hover:scale-105">
      <div className="flex items-center space-x-6">
        <GrMap className="text-white text-6xl" />
        <div>
          <Counter from={0} to={55000} duration={2.5} suffix="m²" />
          <p className="text-[#F9BC0B] text-lg font-baijam font-semibold">
            projetados em BIM
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <RiDoorOpenLine className="text-white text-6xl" />
        <div>
          <Counter from={0} to={10} duration={2.5} />
          <p className="text-[#F9BC0B] text-lg font-baijam font-semibold">
            Empreendimentos
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
