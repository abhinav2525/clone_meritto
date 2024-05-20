import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const elements = [
  {
    title: "Sales Teams",
    discription:
      "Drive leads to closure and at scale with powerful sales management, performance reporting, and notifications.",
    logo: "/sales-icon.png",
  },
  {
    title: "Marketing Teams",
    discription:
      "Attract right audiences, run complete inbound marketing campaigns at scale and contextually nurture leads down the sales funnel.",
    logo: "/marketing-icon.png",
  },
  {
    title: "Admissions Teams",
    discription:
      "Streamline and manage applications at scale as you automate all application and post-application tasks in a single platform.",
    logo: "/admission-team.png",
  },
  {
    title: "Finance Teams",
    discription:
      "Make fee collection easier, faster, and more secure with one-click payment automations, fee forecasting, finance dashboards, and run-time settlement reports",
    logo: "/finance-team.png",
  },
  {
    title: "Operation Teams",
    discription:
      "Streamline processes and make migration easy as you gain control of everything from data to technology",
    logo: "/operation-team.png",
  },
];

const CardTeams = () => {
  return (
    <div className="flex justify-center flex-wrap w-[1110px]">
      {elements.map((element, index) => {
        // console.log(element);
        return (
          <Card
            key={index}
            className="w-[320px] h-[260px] m-4 rounded-none shadow-none border-0 p-0 "
          >
            <CardHeader className="pb-0">
                <div className="flex flex-col items-center justify-center">
                <img src={element.logo} data-src={element.logo+" h"} alt="logo"  className=" h-8 w-8"/>
                <CardTitle className="pt-1 text-lg">{element.title}</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
              <p className="text-center text-pretty text-sm h-20">{element.discription}</p>
            </CardContent>
            <CardFooter className="flex  justify-center">
                <button className="border-2 hover:text-white border-[#4285F4] hover:bg-[#4285F4] text-[#4285F4] text-center text-sm  rounded-sm w-1/2 py-1">
                    Learn More
                </button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default CardTeams;
