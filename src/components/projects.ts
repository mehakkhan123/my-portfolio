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
        detail:"Proficient in structuring web content semantically and accessibly, laying the foundation for robust and well-organized web pages.",
        skillsUsed:["HTML","CSS","JavaScript"],
        image:"/images/calculator.jpg",
        githubLink:"https://github.com/mehakkhan123/simple-calculator.git",
        vercelLink:"https://simple-calculator-three-dun.vercel.app/"
    },
    {
        id:2,
        name:"To-do App",
        detail:"Proficient in structuring web content semantically and accessibly, laying the foundation for robust and well-organized web pages.",
        skillsUsed:["HTML","CSS","JavaScript"],
        image:"/images/todo.jpg",
        githubLink:"https://github.com/mehakkhan123/simple-calculator.git",
        vercelLink:"https://simple-calculator-three-dun.vercel.app/"
    },
    
]
