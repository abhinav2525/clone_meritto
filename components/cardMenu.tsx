import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Check, Key, Tag } from "lucide-react";

const elements = [
  {
    title: "Enrollment Cloud",
    logo: "/icon-enrollment-cloud.png",
    discription:
      "Take control of the entire funnel from inquiry to enrollment and double down on your institution’s efforts to attract, engage and enroll on a single platform.",
    KeyFeatures: [
      "360˚ view across the Admission Lifecycle",
      "Comprehensive Communication Suite",
      "Extensive Workflow Automation",
      "Advanced Reports & Analytics Engine",
    ],
    tag: ["All your teams"],
    tailwind_props: "border-[#F4B400] hover:bg-[#F4B400] text-[#F4B400]",
  },
  {
    title: "Education CRM",
    logo: "/icon-education-CRM.png",
    discription:
      "Equip your sales & marketing teams to be super-efficient as they contextually engage and convert more students. Enroll faster with the in-built payment platform and track sales campaign effectiveness.",
    KeyFeatures: [
      "Sales Execution & Automation",
      "Sales Tracking & Performance",
      "Marketing Automation",
      "Integrated Payment Platform",
    ],
    tag: ["Sales Team", "Marketing Team"],
    tailwind_props: "border-[#0B9D57] hover:bg-[#0B9D57] text-[#0B9D57] ",
  },
  {
    title: "Application Platform",
    logo: "/icon-application-platform.png",
    discription:
      "Accelerate your application-to-enrollment rate as you equip your admissions teams to create advanced custom forms, manage the post-application GD-PI, and seamlessly do everything in between.",
    KeyFeatures: [
      "One-view Application Manager",
      "Admission Workflow",
      "Student Enrollment Portal",
      "Post Application Automation",
    ],
    tag: ["Admissions Team"],
    tailwind_props: "border-[#4285F4] hover:bg-[#4285F4] text-[#4285F4] ",
  },
  {
    title: "Education Payment Cloud",
    logo: "/icon-education-payment-cloud.png",
    discription:
      "Make fee collection easier, faster, and more secure across all student touchpoints. Automate fee reminders, configure payment splits and late fees all while you get run time settlement reports, finance dashboards, and more!",
    KeyFeatures: [
      "Extensive Fee Workflows",
      "Payment Settlement in Multiple Accounts",
      "Reconciliation & Settlement Reports",
      "Automated GST & Surcharge Handling",
    ],
    tag: ["Finance Team"],
    tailwind_props: "border-[#0B9D57] hover:bg-[#0B9D57] text-[#0B9D57]",
  },
  {
    title: "Education Chatbot",
    logo: "/icon-education-chatbot.png",
    discription:
      "Put the smartest admission counselor to work who can convert all inbound and advertising traffic into qualified leads by contextually engaging with them on your website. Uncover intent signals and increase your ROI.",
    KeyFeatures: [
      "Intent-verified Lead Generation",
      "Contextual Nurturing 24×7",
      "Omni-channel Presence",
      "Real-time ROI Dashboard",
    ],
    tag: ["Counseling Team", "Marketing Team"],
    tailwind_props: "border-[#DB4537] hover:bg-[#DB4537] text-[#DB4537]",
  },
];
const CardMenu = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10">
      {elements.map((element, index) => {
        
        let color = element.tailwind_props;
        const re = /border-\[(.*?)] /;
        const found = color.match(re);
        if(found){
          color = found[1];
        }
        // console.log(color);
        return (
        <Card key={index} className=" sm:w-96  w-[360px]  h-auto p-4">
          <CardHeader className="flex flex-row items-center">
            <img
              src={element.logo}
              alt={`${element.title}-logo`}
              className="h-6 w-6"
            />
            <CardTitle className="text-lg pl-2">{element.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm  h-36">{element.discription}</p>
            <div className="flex flex-row flex-wrap justify-between items-center">
              {element.tag.map((tag, index) => (
                <div key={index} className="flex flex-row justify-start items-center">
                  <Tag size={16} strokeWidth={1.2} color={color} />
                  <p  className="text-sm  text-customGray pl-1">
                    {tag}
                  </p>
                </div>
              ))}
            </div>

            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <p className=" text-customGray font-semibold text-lg ">
              Key Features
            </p>
            <div className="flex flex-col justify-start p-2 items-start">
              {element.KeyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-row justify-start items-center"
                >
                  <Check size={16} color={color} strokeWidth={4} />
                  <p className="text-sm p-2">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button
              variant={"ghost"}
              // className={cn("border-2 hover:text-white ", element.tailwind_props)}
              className={cn(`border-2 hover:text-white`,`${element.tailwind_props}`)}
              // text-yellow-300  border-yellow-300 hover:bg-yellow-300 
            >
              Schedule a Demo
            </Button>
          </CardFooter>
        </Card>
      )}
      
      )}
    </div>
  );
};

export default CardMenu;
