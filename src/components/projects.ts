interface Projects {
    id:number;
    name:string;
    detail:string;
    skillsUsed:string[];
    image:string;
    githubLink:string;
    vercelLink:string
}
export const projects:Projects[] =[
    {
        id:1,
        name:"Simple Calculator",
        detail:"A Calculator App that provides basic arithmetic functions. Developed using HTML, CSS, and JavaScript, it offers a familiar interface and is fully responsive to adapt to various screen dimensions.",
        skillsUsed:["HTML","CSS","JavaScript"],
        image:"/images/calculator.jpg",
        githubLink:"https://github.com/mehakkhan123/simple-calculator.git",
        vercelLink:"https://simple-calculator-three-dun.vercel.app/"
    },
    {
        id:2,
        name:"Counter App",
        detail:"A simple Counter App demonstrating basic state management. Built with Next.js, React.js, and Tailwind CSS, it allows users to increment and decrement a value and features a responsive design for consistent performance on any device.",
        skillsUsed:["HTML","Tailwind CSS","TypeScript","React", "Next.js"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/counter_app_nextjs.git",
        vercelLink:"https://counter-app-nextjs-fawn.vercel.app/"
    },
    {
        id:3,
        name:"To-do App",
        detail:"A Todo App built with HTML, CSS, and JavaScript. It lets you add, track, and delete tasks. This app features a responsive design, making it work well across all device sizes.",
        skillsUsed:["HTML","CSS","JavaScript"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/todo-app.git",
        vercelLink:"https://todo-app-gamma-nine-11.vercel.app/"
    },
    {
        id:4,
        name:"Color Picker App",
        detail:"A Color Picker App designed to help users select colors and instantly copy their hex codes. Crafted with HTML, CSS, and JavaScript, this tool boasts a responsive interface that adjusts perfectly to different screen sizes.",
        skillsUsed:["HTML","CSS","JavaScript"],
        image:"/images/colorpicker.avif",
        githubLink:"https://github.com/mehakkhan123/colorpicker-app.git",
        vercelLink:"https://colorpicker-app-eta.vercel.app/"
    },
    {
        id:5,
        name:"Personal Portfolio Website",
        detail:"Welcome to my personal portfolio website, a digital showcase of my skills, projects, and passion for web development. Designed with a clean, modern aesthetic and built using HTML, CSS, and JavaScript, this site serves as a central hub to explore my work and learn more about my expertise.",
        skillsUsed:["HTML","CSS"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/personalPortfolioWebsite.git",
        vercelLink:"https://personal-portfolio-website-five-khaki.vercel.app/"
    },
    {
        id:6,
        name:"Static Interactive Resume",
        detail:"A Static Interactive Resume presenting my professional profile. This project, built with HTML, CSS, and JavaScript, includes interactive elements like a hide/show skills button and is fully responsive to ensure optimal viewing on any screen.",
        skillsUsed:["HTML","CSS","JavaScript"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/hackathon_ResumeBuilder.git",
        vercelLink:"https://milestone1-staticresume.vercel.app/"
    },
    {
        id:7,
        name:"Personal Portfolio Website",
        detail:"A personal portfolio website meticulously crafted with Next.js, React.js, and Tailwind CSS. It highlights my frontend expertise and offers a fast, visually appealing, and highly responsive experience tailored for all devices.",
        skillsUsed:["HTML","Tailwind CSS", "TypeScript", "React","Next.js","Shadcn"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/my-portfolio.git",
        vercelLink:"https://my-portfolio-xi-puce-95.vercel.app/"
    },
    {
        id:8,
        name:"Simple Multi Page Website",
        detail:"A simple multi-page website serving as an educational platform example. Built with Next.js, React.js, and Tailwind CSS, it features clear navigation, a compelling hero section, and a responsive design that ensures a great user experience on any device.",
        skillsUsed:["HTML","Tailwind CSS","React", "Next.js", "Shadcn"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/milestone2-assignment-tailwind.git",
        vercelLink:"https://milestone2-assignment-tailwind-ivory.vercel.app/"
    },
    
]
