import { title } from "process";

const elements = [
  {
    title: "1 Billion",
    description: `Student engagements
        powered on average annually`,
  },
  {
    title: "5 Million",
    description: `Applications managed
        on average annually`,
  },
  {
    title: "100 Million",
    description: `Inquiries processed on
        average annually`,
  },
  {
    title: "50,000",
    description: `Business users across departments and job functions`,
  },
];

const Facts = () => {
  return (
    <div className="flex sm:flex-row flex-wrap  sm:w-3/5 w-screen-8p h-full p-6 bg-[#0C1C41] rounded-lg mt-4">
      <div className="flex sm:flex-row flex-wrap sm:w-3/5 gap-5">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex sm: sm:w-60  h-24 flex-col items-start justify-start"
          >
            <p className="text-3xl font-normal text-white">{element.title}</p>
            <p className="text-white text-wrap">{element.description}</p>
          </div>
        ))}
      </div>
      <div className="sm:h-auto sm:w-2/5 w-full  h-52 flex flex-col justify-center items-center bg-[#253356] rounded-lg">
        <p className="text-center text-3xl text-white font-semibold flex items-center justify-center">
          1000+
        </p>
        <p className=" text-white text-center">
          Education organizations trust Meritto
        </p>
      </div>
    </div>
  );
};

export default Facts;
