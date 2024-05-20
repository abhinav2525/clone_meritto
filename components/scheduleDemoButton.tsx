import { ChevronRight } from "lucide-react";

const SheduleADemoButton = () => {
  return (
    <button className=" bg-customBlue  w-40  h-10 rounded-md px-2 flex flex-row items-center">
    <p className="text-white font-semibold flex items-center text-sm">
      Schedule a Demo
    </p>
    <div className="flex items-center">
      <ChevronRight color="#ffffff" strokeWidth={2} />
      {/* <ArrowRight size={20} strokeWidth={1.2} color="#ffffff" /> */}
    </div>
  </button>
  );
};

export default SheduleADemoButton;
