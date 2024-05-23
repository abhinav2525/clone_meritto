import { ChevronRight } from "lucide-react";

const SheduleADemoButton = () => {
  return (
    <button className=" bg-customBlue  w-36 h-8 sm:w-40  sm:h-10  rounded-sm sm:px-2 px-1 flex flex-row items-center">
    <p className="text-white font-semibold flex items-center sm:text-sm text-xs">
      Schedule a Demo
    </p>
    <div className="flex items-center">
      <ChevronRight color="#ffffff" strokeWidth={1.2} size={20}/>
      {/* <ArrowRight size={20} strokeWidth={1.2} color="#ffffff" /> */}
    </div>
  </button>
  );
};

export default SheduleADemoButton;
