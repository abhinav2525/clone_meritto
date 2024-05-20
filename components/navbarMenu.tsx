import { ChevronDown } from 'lucide-react';
const menu = [
  { title: "Product", icon:ChevronDown},
  { title: "Solutions", icon:ChevronDown},
  { title: "Resources", icon:ChevronDown},
  { title: "Company", icon:ChevronDown},
];
const NavbarMenu = () => {

  return (
    <>
     <div className="flex flex-row justify-center items-center h-20 gap-4">
        {
          
          menu.map((item, index) => (
            <div key={index} className="flex flex-row justify-center">
              <div className="flex items-center text-center  text-customGray font-medium ">
                {item.title}
              </div>
              <div className="flex items-center">
                <item.icon size={15}/>
              </div>
            </div>
          ))

        }
        </div>
    </>
  );
};

export default NavbarMenu;
