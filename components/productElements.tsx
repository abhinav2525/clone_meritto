const ProductElements = () => {
    const elements = [
        {title: 'Enrollment Cloud', logo:"./icon-enrollment-cloud.png"},
        {title: 'Education CRM', logo:"./icon-education-CRM.png"},
        {title: 'Application Platform', logo:"./icon-application-platform.png"},
        {title: 'Education Payment Cloud', logo:"./icon-education-payment-cloud.png"},
        {title: 'Education Chatbot', logo:"./icon-education-chatbot.png"},

    ];
    return (
        <div className="flex sm:flex-row justify-center flex-wrap   sm:gap-24  gap-8">
            {
                elements.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center sm:h-auto sm:w-auto ">
                        <div className="flex justify-center  items-center sm:h-16 sm:w-full h-12 w-24 ">
                            <img src={item.logo} alt={item.title} className="sm:h-full sm:w-[70px] w-16 h-16 object-fill"/>
                        </div>
                        <div className="flex items-center text-center text-customGray text-xs text-wrap pt-4 w-[90px]">
                            {item.title}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default ProductElements;