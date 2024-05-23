import { CircleCheck } from "lucide-react";

const elements = [
  {
    heading: "Purpose-built to keep you enrolling",
    points: [
      `With insights gained from serving over a thousand educational organizations, we develop products that cater to deep use cases. Whatever the challenge is, it’s likely we already have a solution for it.
      After all, managing 100 million student inquiries a year adds to our experience.`,
      "After all, managing 100 million student inquiries a year adds to our experience.",
    ],
  },
  {
    heading: "Scalability at the forefront",
    points: [
      "Our products are designed to equip you for tomorrow and enable you to scale. Whether it’s vast amounts of student data or multiple business complexities, we can solve for all.",
    ],
  },
  {
    heading: "Dedicated training and migration support",
    points: [
      "We are passionate about our partners and we believe we succeed when you do. It’s why we get you up and running in a breeze.",
    ],
  },
  {
    heading: "Building a collaborative community",
    points: [
      "We have built a vibrant community of professionals from the education industry where you can interact, network, and enhance your skills. From offline events to webinars, we host them all.",
    ],
  },
];

const ReasonsPoints = () => {
  return (
    <div className="flex flex-col justify-start sm:w-3/4">
      {
      elements.map((element, index) => (
        <div key={index} className="flex flex-col justify-start m-2">
        <div  className="flex flex-row justify-start items-center gap-1 ">
          <CircleCheck size={20} strokeWidth={2.25} />
          <p className="sm:text-xl font-semibold">{element.heading}</p>
        </div>
        {element.points.map((point, index) => (
            <div key={index} className=" mb-3">
                <p className=" text-start text-wrap text-sm p-0 ">{point}</p>
            </div>
        ))}
        </div>
      ))
      }
    </div>
  );
};
export default ReasonsPoints;
