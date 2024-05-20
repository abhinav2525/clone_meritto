const elements = [
  "./Institutions/1.jpg",
  "./Institutions/2.png",
  "./Institutions/3.png",
  "./Institutions/4.png",
  "./Institutions/5.png",
  "./Institutions/6.png",
  "./Institutions/7.png",
  "./Institutions/8.png",
  "./Institutions/9.png",
  "./Institutions/10.png",
  "./Institutions/11.png",
  "./Institutions/12.png",
];
const InstituTions = () => {
  return (
  <div className="flex  justify-evenly flex-wrap w-4/5 items-center">
    {elements.map((element, index) => (
      <div key={index} className="h-[86px] w-[175px] px-[10px] pt-[10px] pb-[20px]">
        <img src={element}  />
      </div>
    ))}
  </div>
  );
};

export default InstituTions;
