import { Briefcase, Coffee, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Label } from "radix-ui";
import { FaGithub, FaLinkedin, FaLinkedinIn } from "react-icons/fa6";
import { text } from "stream/consumers";

export const stats = [
    {label: "Años de Experiencia", value:"+3" },
    {label: "Proyectos completados", value:"+15"},
    {label: "Commits levantados", value: "+500"},
    {label: "Tazas de Café tomadas", value: "+10000"}
];

export const highlights = [
    {icon: MapPin, text:"Viviendo en Maracay, Estado Aragua"},
    {icon: Briefcase, text:"Disponible para trabajar remoto"},
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
]

export const SocialLinks = [
    {icon: FaGithub, href:"https://github.com/RoyalB3", label:"GitHub"},
    {icon: FaLinkedinIn, href:"https://www.linkedin.com/in/richard-sequera-suarez-a17135280/", label:"LinkedIn"}
]