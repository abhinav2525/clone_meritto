"use client"; // Import the correct component for Navbar
import NavbarOptions from "@/components/navbarMenu";
import SheduleADemoButton from "@/components/scheduleDemoButton";
import ProductElements from "@/components/productElements";
import { ArrowRight } from "lucide-react";
import CardMenu from "@/components/cardMenu";
import CardTeams from "@/components/cardTeams";
import Institutions from "@/components/Institutions";
import ReasonsPoints from "@/components/reasons";
import Ratings from "@/components/ratings";
import Facts from "@/components/facts";
import FreqQuest from "@/components/freqQuest";
export default function Home() {
  return (
    <main className="flex min-h-screen relative bg-white flex-col ">
      <div className="flex sm:justify-evenly sm:items-center flex-row  h-auto w-screen sm:px-16 px-4 gap-10 shadow-sm  z-10 bg-white">
        <div className="flex flex-row  items-center gap-10">
          <img
            src="./Logo.png"
            alt="logo"
            className=" w-[160px] h-[44px] object-fit flex items-center justify-center"
          />
          <NavbarOptions />
        </div>
        <div className=" hidden sm:flex sm:flex-row sm:justify-center  sm:items-center sm:gap-2">
          <div className="flex flex-row items-center gap-1 ">
            <img src="./secured-lock.svg" className="h-[14px] w-[16px] " />
            <p className=" font-semibold text-customGray">Login</p>
            <ArrowRight size={20} strokeWidth={1.2} />
          </div>
          <SheduleADemoButton />
        </div>
      </div>
      <div className="h-auto  flex  justify-center items-center py-12 sm:my-12">
        <div className="w-full max-w-4xl px-4">
          <div className="mb-12 pb-12 text-center w-full max-w-4xl px-4">
            <p className="text-pretty font-semibold sm:text-5xl text-3xl pb-2">
              Empowering enrollment growth at scale, globally
            </p>
            <p className="mt-1 mb-6 sm:text-lg text-sm text-wrap">
              Whether it’s boosting team productivity or student experience,
              optimizing marketing spends or growing enrollments, Meritto’s
              unified platform equips educational organizations to do it all.
              Purpose-built by those who know the education industry better.
            </p>
            <div className="mt-2 mb-4 flex justify-center">
              <SheduleADemoButton />
            </div>
          </div>
          <div>
            <ProductElements />
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-[#F3F9FF] py-[80px] flex flex-col items-center justify-start">
        <div className="sm:mx-24  px-4 flex flex-col  sm:h-40  sm:w-screen">
          <p className="sm:h-10 w-full sm:text-center  text-start text-pretty font-semibold text-2xl sm:pb-[10px] ">
            We are the Operating System for Student Recruitment and Enrollment
          </p>
          <p className="sm:text-center text-start text-wrap w-full sm:mt-[5px] sm:mb-[30px] sm:h-[72px]">
            Our comprehensive suite of purpose-built tools functions like a
            well-oiled operating system, seamlessly addressing every aspect of
            the process. While these solutions stand out individually for their
            robust capabilities, their real impact is realized when you enroll
            as one.
          </p>
        </div>
        <CardMenu />
      </div>
      <div className="h-auto sm:w-full sm:pt-16  flex flex-col items-center justify-center">
        <div className="flex  items-center justify-center  lg:w-screen  h-[72px]  mb-10">
          <p className="text-center text-wrap font-semibold  text-xl sm:text-2xl h-full  sm:w-80">
            Everything you need to make your teams agile and productive
          </p>
        </div>
        <CardTeams />
      </div>
      <div className="w-full h-auto flex flex-col items-center justify-center pt-20  pb-10 ">
        <div className=" sm:mx-44  sm:px-4 flex flex-col  sm:h-40 sm:w-screen ">
          <p className="  sm:h-8 sm:w-screen sm:text-center text-start text-pretty font-semibold sm:text-3xl  text-2xl sm:mb-[10px] p-4">
            Trusted by over 1000 educational organizations
          </p>
          <p className="sm:text-center text-start sm:text-base  text-sm p-2 text-pretty sm:w-screen sm:mt-[5px] sm:mb-[30px] sm:h-[72px]">
            From EdTech Companies, Coaching & Training Institutes, Study Abroad
            Consultants, K12 Schools, Play & Pre-Schools to Higher Education
            Institutions, everybody loves us for what we do.
          </p>
        </div>
        <Institutions />
      </div>
      <div className="sm:w-screen h-auto  mt-12 bg-[#F3F9FF]">
        <div className="flex flex-col    sm:px-4  sm:py-12 items-center justify-center sm:w-full px-2">
          <p className=" sm:h-10 pb-2 w-full sm:text-center  text-start text-2xl  flex items-center justify-center  font-semibold">
            Will Meritto work for my educational organization?
          </p>
          <p className=" mb-3 sm:h-20 w-full flex items-center justify-center">
            Yes, if you are ready to scale. Here are reasons why we’re known as
            game-changers in student recruitment and enrollments
          </p>
          <div className="flex sm:flex-row flex-wrap mt-12  -mx-4 justify-between w-full">
            <div className="sm:w-1/2 w-screen flex items-center justify-center sm:justify-end">
              <ReasonsPoints />
            </div>
            <div className="sm:w-1/2 flex sm:items-center  justify-center w-screen">
              <img src="./screenshot.png" alt="sc" className="w-3/4" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto sm:w-screen flex  flex-wrap sm:flex-row justify-center items-center ">
        <div className="sm:h-96 sm:w-1/3 flex flex-col items-start sm:justify-start justify-center p-4 sm:sticky  sm:top-52">
          <p className="text-2xl text-start font-semibold w-full text-wrap pb-1">
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
        <div className="sm:h-[1050px] h-auto  sm:w-5/12 flex items-start justify-start ">
          <img src="/companies.png" alt="sc" className="object-fit"/>
        </div>
      </div>
      <div className="w-screen h-auto  sm:pt-12  sm:pb-4 bg-[#F8F8F8]">
        <div className=" px-4 py-12 w-full flex sm:flex-col flex-wrap">
          <p className="text-start sm:text-center  font-semibold sm:text-3xl text-2xl text-wrap">
            Our customers market our product the best
          </p>
          <p className="text-start sm:text-center text-md  pt-4 text-wrap">
            After all, their reviews are from their first-hand experience
          </p>
          <Ratings />
        </div>
      </div>
      <div className="w-screen h-auto sm:mt-4  sm:py-12 flex flex-col items-center justify-center p-2">
        <p className="text-start sm:text-center  font-semibold sm:text-3xl text-2xl text-wrap text-[#0C1C41] p-2">
          We are a global enrollment platform designed to equip you for growth
        </p>
        <Facts />
      </div>

      <div className="flex sm:flex-row  flex-wrap  items-center justify-center  px-4 py-10 sm:w-screen">
        <div className="flex flex-col  items-start justify-end   sm:w-3/5">
          <p className="text-2xl sm:text-center  font-semibold  sm:pl-40">
            See Meritto (formerly NoPaperForms) in action
          </p>
          <div className=" flex justify-start sm:pl-40 mt-2">
            <SheduleADemoButton />
          </div>
          <p className="text-wrap text-start sm:w-11/12 sm:pl-40  mt-2">
            Know how you could equip your teams to be more productive with our
            purpose-built solutions and grow your enrollments like never before.
          </p>
        </div>
        <div className="sm:w-2/5 flex items-center justify-start">
          <img
            src="/rocketimg.png"
            className=" sm:h-72 sm:w-80 w-52 h-44"
          ></img>
        </div>
      </div>
      <div className="flex item-center justify-center h-auto w-full ">
        <div className="flex flex-col item-center justify-center sm:w-3/4  py-4 sm:px-12 px-4  bg-[#F3F9FF]">
          <div className=" sm:mx-16 sm:py-4">
          <p className="sm:text-center text-start font-semibold text-2xl">Frequently Asked Questions</p>
          <p className="sm:text-center text-start">
            Get answers to frequently asked questions about everything we do.
          </p>
          <FreqQuest/>
          </div>
        </div>
      </div>
    </main>
  );
}
