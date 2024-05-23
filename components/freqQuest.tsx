import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Plus } from "lucide-react";

const elements = [
  {
    question: "What is NoPaperForms?",
    answers: [
      "NoPaperForms, now known as Meritto, is a de-facto choice for all educational organizations looking to grow their enrollments. It empowers Sales, Marketing, Admission, Finance, and Operation teams with its powerful yet easy-to-use solutions, making it a groundbreaking Operating System for Student Recruitment and Enrollments.",
      "From the Enrollment Cloud and Education CRM to the Application Platform, Education Chatbot, and Payment Cloud, all of Meritto’s products are purpose-built to equip educational organizations to achieve their goals.",
      "Trusted and utilized by over a 1000 educational organizations, including EdTech companies, Coaching & Training Institutes, Study Abroad Consultants, K12 schools, Play & Pre-schools, and Higher Education Institutions, Meritto has proven its robust capabilities. On an annual basis, it empowers 1 billion student engagements, processes 100 million inquiries, and manages 5 million applications on average.",
    ],
  },
  {
    question: "What is Meritto? ",
    answers: [
      "Meritto, formerly known as NoPaperForms, is a groundbreaking Operating System for Student Recruitment and Enrollments, equipping educational organizations worldwide. It is the de-facto choice for all educational organizations seeking to fuel enrollment growth. Meritto provides powerful yet easy-to-use solutions, enhancing productivity for Sales, Marketing, Admission, Finance, and Operation teams.",
      "Products such as Enrollment Cloud, Education CRM, Application Platform, Education Chatbot, and Payment Cloud are all purpose-built to sustain and boost enrollment in educational organizations. With scalability at the forefront, Meritto not only supports present enrollment growth but also prepares organizations for future expansion.",
      "Trusted and utilized by over 1000 educational organizations, ranging from EdTech Companies, Coaching & Training Institutes, Study Abroad Consultants, K12 Schools, Play & Pre-Schools to Higher Education Institutions, Meritto showcases its robust capabilities on an annual basis. It empowers 1 billion student engagements, processes 100 million inquiries, and manages 5 million applications on average.",
    ],
  },
  {
    question: "What is the Enrollment Cloud?",
    answers: [
      "An enrollment cloud is a modern-age cloud-based system for educational organisations looking to manage the entire process of enrolling students from their very first touchpoint. It unifies all teams involved in the process from sales, marketing, finance, admission, and operations, and allows them to centralise, track, nurture and convert leads into applications and eventually enrollments. It provides a single source of truth for all teams to access information, track lead and applicant activity, contextually engage and nurture leads down the funnel, check application status, and collect fee payments.",
      "We offer an Enrollment Cloud that has been a game-changer for educational organizations of all sorts looking to grow their enrollments. Its easy-to-use platform with intuitive features allows one to gain complete control of thebentire admission funnel from inquiry to enrollment and double down on your institution’s efforts to attract, engage and enroll.",
    ],
  },
  {
    question: "What is the Education CRM?",
    answers: [
      "An Education CRM is a purpose-built solution that can empower an educational organization’s sales and marketing teams to drive more student conversions. It equips teams to be more efficient and productive by allowing them to engage contextually with prospective learners and students. It is different from a B2B Sales CRM which typically involves a long and complex cycle, used mainly by sales representatives in organizations.",
      "A B2B Sales CRM is not designed to handle high-volume calls, data analytics, tracking, and reporting which educational organisations like Ed-Tech companies and coaching and training institutes need in today’s day and age. Our B2C Education CRM solves all these problems with its deep focus on student touchpoints and their enrolment journey. It is widely used by large call center teams & on-field sales representatives and has features like Sales Execution & Automation, Sales Tracking & Performance, Marketing Automation, and Integrated Payment Management which is a unique differentiator. It empowers sales & marketing teams to fasten deal closures and track campaign effectiveness with real-time data.",
    ],
  },
  {
    question: "Who could use Meritto’ Enrollment Solutions? ",
    answers: [
      "Meritto is the defacto choice for anyone in education looking to scale. Over 1000 educational organisations from Higher Education Institutions, Schools, Ed-Tech Companies, Coaching & Training Centres, and Educational Consultants use Meritto to make their sales, marketing, admissions, finance, and operations teams more efficient, agile, and productive. Its purpose-built solutions allow them to attract, engage and enroll at scale.",
    ],
  },
  {
    question: "What is an Education Chatbot? ",
    answers: [
      "An Education Chatbot is virtual, and the smartest admission counsellor, you can ever put to work, who can convert all your inbound and advertising traffic into qualified leads by contextually engaging with them on your website. Unlike other chatbots which are built as horizontal platforms, and can be used in different industries, an education chatbot understands how the education industry functions and nurtures prospects as per their requirements.",
      "It ensures that each conversation is unique, thus, helping in capturing and strategically nurturing the candidate with a delightful counseling experience. It can be integrated into various platforms and applications besides websites, such as WhatsApp and Facebook to provide prospective students with quick and easy access to information and support 24/7/365. Meritto’ NIAA, the specialised education chatbot has been made for educational organisations to help them grow their enrolments and the bottom line.",
    ],
  },
  {
    question: "What is a Payment Cloud? ",
    answers: [
      "A Payment Cloud allows educational organisations to collect any type of fee whether one-time, partial, or recurring through all student touchpoints. It empowers them to make the entire fee collection process fast and equips them with the ability to forecast fee payments. It digitizes the entire fee collection process as it offers all methods of payment in one place from online, cheque/DD, to offline cash payment and instant financing.",
      "Our purpose-built Payment Cloud called Collexo features a robust reporting engine with run-time settlement reports, finance dashboards, payment workflows, automated communications, and more. Its inbuilt communication suite allows you to automate your reminder communications and send real-time emails, SMS, or even WhatsApp to your students. Trusted by over 1000 educational organisations, it is transforming the way admission fee is collected, managed, and tracked.",
    ],
  },
  {
    question: "What is an Ed-Tech CRM? ",
    answers: [
      "An EdTech CRM is a unified platform for student acquisition, retention, and upsell. It allows EdTech companies to get higher efficiency from their sales and marketing teams and eventually boost their enrollments and retention rates. It generally consists of features like Sales Execution & Automation, Sales Tracking & Performance, Sales Notifications, and Marketing Automation.",
      "Unlike a generic sales CRM, our purpose-built EdTech CRM is primarily designed to super-charge Marketing Teams to attract the right audiences, run complete inbound marketing campaigns at scale, and contextually nurture leads down the sales funnel. Further, it equips the Sales Teams to drive leads to closure with powerful management, performance reporting, and notifications. What stands out is its Integrated Payment Management feature that makes it easy for sales teams to actually convert students and the management teams to track the effectiveness of campaigns.",
    ],
  },
  {
    question: "What is a School Admission CRM? ",
    answers: [
      "A School Admission CRM is a new-age software architected for schools of all kinds to increase their enrollments by digitizing the entire admission process. It provides a centralized platform to empower sales, marketing, admission, counseling, finance, and operations teams to scale admissions systematically and enhances your brand discovery. It also equips the stakeholders with insightful real-time reports to take strategic calls. For example, the head of counseling will get to see their team’s overall productivity or a marketing head will have access to real-time ROI through campaign optimization reports.",
    ],
  },
  {
    question: "What is a Study Abroad CRM? ",
    answers: [
      "A Study Abroad CRM is a cloud-based solution for all Study abroad and educational consultants to bring together sales, marketing, counseling, and admission teams involved in the enrollment process and equip them to manage all student leads, applications, and payments in a single platform. It solves the problem of switching between too many solutions and serves as a single source of truth for all their operational and business processes aligned to grow enrollments in all.",
      "Unlike other sales CRMs available for study abroad and educational consultants in the market, Meritto stands out with its purpose-built CRM that allows these consultancies to make their teams more productive with its powerful yet easy-to-use solutions and empowers them to attract, engage and grow their enrollments.",
    ],
  },
  {
    question: "What is a Coaching & Training Centre CRM? ",
    answers: [
      "A Coaching & Training Centre CRM is a cloud-based solution that acts as a unified platform for coaching and training centers to get complete visibility into center-wise operations, double down the performance of their sales & marketing teams, and enroll more. It brings teams from across multiple centers to centralise data and then empowers them to nurture students for conversion, upsell, and retention.",
      "Our Coaching & Training Centre CRM with its powerful yet intuitive empowers sales & marketing teams to work towards high conversion rates all while also ensuring low drop-off rates and improved student retention. Its key features include Automated & Instant Data Exchange, Real-time Allocation of Leads, Team Hierarchy Management, Advanced Reports & Analytics, 360° Communication & Nurturing, and an Inbuilt Payment Collection Platform to make fee forecasting easy and fee collection faster.",
    ],
  },
];

const FreqQuest = () => {
  return (
  <div className="flex flex-col gap-3 h-auto pt-5">
    {
        elements.map((element:any,index:any) => (
            <Collapsible className="bg-white p-2 gap-10">
                <div key={index} className="flex flex-col w-full h-auto">
                <CollapsibleTrigger>
                    <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row justify-start gap-2 ">
                        <span>✅</span>
                        <p className="text-start font-medium">{element.question}</p>
                    </div>
                    <div className="h-auto w-6 flex justify-center items-center">
                        <Plus />
                    </div>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                    <div className="ml-6 mr-6 pt-2">
                    {element.answers.map((answer:string) => (
                        <p className="text-sm pb-4 text-justify">{answer}</p>
                    ))}
                    </div>
                </CollapsibleContent>
                </div>
            </Collapsible>
            ))
    }
    </div>
  );
};

export default FreqQuest;
