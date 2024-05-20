"use client"; // Import the correct component for Navbar
import NavbarOptions from "@/components/navbarMenu";
import SheduleADemoButton from "@/components/scheduleDemoButton";
import ProductElements from "@/components/productElements";
import { ArrowRight } from "lucide-react";
import CardMenu from "@/components/cardMenu";
import CardTeams from "@/components/cardTeams";
import Institutions from "@/components/Institutions";
import ReasonsPoints from "@/components/reasons";
export default function Home() {
  return (
    <main className="flex min-h-screen relative bg-white flex-col ">
      <div className="flex justify-evenly items-center flex-row  h-auto w-screen px-16 gap-10 shadow-sm  z-10 bg-white">
        <div className="flex flex-row  items-center gap-10">
          <img
            src="./Logo.png"
            alt="logo"
            className=" w-[160px] h-[44px] object-fit flex items-center justify-center"
          />
          <NavbarOptions />
        </div>
        <div className="flex flex-row justify-center  items-center gap-2">
          <div className="flex flex-row items-center gap-1 ">
            <img src="./secured-lock.svg" className="h-[14px] w-[16px] " />
            <p className=" font-semibold text-customGray">Login</p>
            <ArrowRight size={20} strokeWidth={1.2} />
          </div>
          <SheduleADemoButton />
        </div>
      </div>
      <div className="py-12 my-12 flex  justify-center flex-col items-center">
        <div className="mb-[24px] pb-[48px]">
          <div className="mx-24  px-4 flex flex-col justify-start h-[300px] w-[920px] ">
            <p className="h-[125px] w-full text-center text-pretty font-semibold text-5xl pb-[10px]">
              Empowering enrollment growth at scale, globally
            </p>
            <p className="text-center text-wrap w-full mt-[5px] mb-[30px] h-[72px]">
              Whether it’s boosting team productivity or student experience,
              optimizing marketing spends or growing enrollments, Meritto’s
              unified platform equips educational organizations to do it all.
              Purpose-built by those who know the education industry better.
            </p>
            <div className="mt-[8px] mb-[16px] flex justify-center">
              <SheduleADemoButton />
            </div>
          </div>
        </div>
        <div>
          <ProductElements />
        </div>
      </div>
      <div className="w-full h-auto bg-[#F3F9FF] py-[80px] flex flex-col items-center justify-start">
        <div className="mx-24  px-4 flex flex-col  h-40 w-[920px] ">
          <p className=" h-10 w-full text-center text-pretty font-semibold text-2xl pb-[10px]">
            We are the Operating System for Student Recruitment and Enrollment
          </p>
          <p className="text-center text-wrap w-full mt-[5px] mb-[30px] h-[72px]">
            Our comprehensive suite of purpose-built tools functions like a
            well-oiled operating system, seamlessly addressing every aspect of
            the process. While these solutions stand out individually for their
            robust capabilities, their real impact is realized when you enroll
            as one.
          </p>
        </div>

        <CardMenu />
      </div>
      <div className="h-auto w-full pt-16  flex flex-col items-center justify-center ">
        <div className="flex  items-center justify-center  w-[1110px]  h-[72px]  mb-10">
          <p className="text-center text-wrap font-semibold text-2xl h-full  w-96">
            Everything you need to make your teams agile and productive
          </p>
        </div>
        <CardTeams />
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center pt-20  pb-10 ">
        <div className=" mx-44  px-4 flex flex-col  h-40 w-[1110px] ">
          <p className="  h-8 w-full text-center text-pretty font-semibold text-3xl mb-[10px]">
            Trusted by over 1000 educational organizations
          </p>
          <p className="text-center text-base text-pretty w-full mt-[5px] mb-[30px] h-[72px]">
            From EdTech Companies, Coaching & Training Institutes, Study Abroad
            Consultants, K12 Schools, Play & Pre-Schools to Higher Education
            Institutions, everybody loves us for what we do.
          </p>
        </div>
        <Institutions />
      </div>
      <div className="w-full h-auto  mt-12 bg-[#F3F9FF]">
        <div className="flex flex-col mx-44  px-4  py-12 items-center justify-center">
          <p className=" h-10 pb-2 text-center text-2xl  flex items-center justify-center  font-semibold">
            Will Meritto work for my educational organization?
          </p>
          <p className=" mb-3">
            Yes, if you are ready to scale. Here are reasons why we’re known as
            game-changers in student recruitment and enrollments
          </p>
          <div className="flex flex-row  mt-12  -mx-4 justify-between w-auto">
            <div className="w-1/2">
              <ReasonsPoints />
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src="./screenshot.png" alt="sc" className=" w-full  h-4/5" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-96 w-full flex flex-row justify-around items-center">
        <div className="h-96 w-1/2 flex flex-col items-center justify-center sticky top-0">
          <p className="text-2xl text-start font-semibold w-1/2 text-wrap pb-1">
            Connect Meritto with apps and integrations you use
          </p>
          <p className="text-center text-sm">
            Expand the possibilities of what can be achieved
          </p>
          <div className="flex flex-row justify-start items-center gap-1 pt-3">
            <p className="text-customBlue">Learn More</p>
            <ArrowRight size={22} strokeWidth={2.2} color={"#4285F4"} />
          </div>
        </div>
        <div className="h-96 w-1/2 flex items-center">
          <img src="/companies.png" alt="sc" className="w-11/12 h-[1050px] object-fit" />
        </div>
      </div>
    </main>
  );
}
