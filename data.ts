import { Briefcase, Cloud, Code2, Coffee, Cpu, Database, GitBranch, Globe, GraduationCap, Layers, Layout, Mail, MapPin, Palette, Phone, Server, Terminal } from "lucide-react";
import { title } from "process";
import { Label } from "radix-ui";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { text } from "stream/consumers";

export const stats = [
    {label: "Años de Experiencia", value:"+2" },
    {label: "Proyectos completados", value:"+15"},
    {label: "Commits levantados", value: "+500"},
    {label: "Tazas de Café tomadas", value: "+1000"}
];

export const highlights = [
    {icon: MapPin, text:"Viviendo en Maracay, Estado Aragua, Venezuela"},
    {icon: Briefcase, text:"Disponible para trabajar Remoto, Híbrido o Presencial."},
    {icon: GraduationCap, text:"Graduado en el Instituto Profesional Los Leones"},
    {icon: Coffee, text:"Motivado por el café y la curiosidad"}
];

export const contactInfo = [
{
    icon: Mail,
    label: "Correo",
    value: "richard.stivens1999@outlook.com",
    href: "mailto:richard.stivens1999@outlook.com"
},
{
    icon: Phone,
    label: "Teléfono",
    value: "+58 424",
}
];

export const SocialLinks = [
    {icon: FaGithub, href:"https://github.com/RoyalB3", label:"GitHub"},
    {icon: FaLinkedinIn, href:"https://www.linkedin.com/in/richard-sequera-suarez-a17135280/", label:"LinkedIn"}
];  

export const skillCategories = [
    {
        title: "FrontEnd",
        skills: [
            {name: "React", icon: Code2},
            {name: "Next.Js", icon: Globe},
            {name: "Typescript", icon: Terminal},
            {name: "Tailwind CSS", icon: Palette},
            {name: "vue.js", icon: Layout}
        ],
    },
    {
        title: "BackEnd",
        skills: [
            {name: "Node.js", icon: Server},
            {name: "Express", icon: Layers},
            {name: "Sql Server", icon: Database},
            {name: "Oracle", icon: Database},
            {name: "Rest APIs", icon: Cloud}
        ]
    },
    {
        title: "Herramientas y Otros",
        skills: [
            {name: "Git", icon: GitBranch},
            {name: "Azure", icon: Cloud},
            {name: "Figma", icon: Palette},
            {name: "CI/CD", icon: Cpu},
        ]
    }
];