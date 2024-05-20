const ProductElements = () => {
    const elements = [
        {title: 'Enrollment Cloud', logo:"./icon-enrollment-cloud.png"},
        {title: 'Education CRM', logo:"./icon-education-CRM.png"},
        {title: 'Application Platform', logo:"./icon-application-platform.png"},
        {title: 'Education Payment Cloud', logo:"./icon-education-payment-cloud.png"},
        {title: 'Education Chatbot', logo:"./icon-education-chatbot.png"},

    ];
    return (
        <div className="flex flex-row justify-center">
            {
                elements.map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center h-[134px] w-48">
                        <div className="flex justify-center  items-center h-16 w-full">
                            <img src={item.logo} alt={item.title} className="h-full w-[70px]"/>
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