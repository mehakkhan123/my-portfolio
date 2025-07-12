import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import type { IconType } from "react-icons";

interface Skills {
    id:number;
    name:string;
    detail:string;
    icon:IconType;
}

export const skills:Skills[] =[
    {
        id:1,
        name:"HTML",
        detail:"Proficient in structuring web content semantically and accessibly, laying the foundation for robust and well-organized web pages.",
        icon:FaHtml5
    },
    {
        id:2,
        name:"CSS",
        detail:"Expert in styling web applications, ensuring responsive design, visual appeal, and consistent user experiences across various devices and browsers.",
        icon:FaCss3Alt
    },
    {
        id:3,
        name:"JavaScript",
        detail:"Highly skilled in developing dynamic and interactive user interfaces, implementing complex client-side logic, and building engaging web experiences.",
        icon:IoLogoJavascript
    },
    {
        id:4,
        name:"TypeScript",
        detail:"Experienced in leveraging TypeScript for enhanced code quality, maintainability, and scalability by introducing strong typing to JavaScript projects.",
        icon:BiLogoTypescript
    },
    {
        id:5,
        name:"React",
        detail:"Proficient in building robust and interactive single-page applications using React's component-based architecture and state management.",
        icon:FaReact
    },
    {
        id:6,
        name:"Next.js",
        detail:"Skilled in developing server-side rendered (SSR) and static-generated React applications, optimizing for performance, SEO, and developer experience.",
        icon:RiNextjsFill
    },
    {
        id:7,
        name:"Shadcn",
        detail:"Implementing accessible and beautifully designed user interfaces quickly using modern component libraries.",
        icon:SiShadcnui
    }

]