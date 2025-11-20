import { Facebook, FacebookIcon, Instagram, InstagramIcon, Mail } from "lucide-react"
import Logo from "./Logo"
import { Link } from "react-router"
import { RiWhatsappLine } from "@remixicon/react"

const Footer = () => {
    const pages = [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "Pricing", link: "/pricing" },
        { name: "Contact", link: "/contact" },
    ]

    const socialLinks = [
        {
            logo: <RiWhatsappLine className="h-6 w-6" />,
            content: "+33 7 44 99 93 89",
            link: "https://wa.me/33744999389"
        },
        {
            logo: <Mail className="h-5 w-5" />,
            content: "marctecke@gmail.com",
            link: "mailto:marctecke@gmail.com"
        },
        {
            logo: <Instagram className="h-5 w-5" />,
            content: "marc.tecke",
            link: "https://www.instagram.com/marc.tecke/"
        },
        {
            logo: <Facebook className="h-5 w-5" />,
            content: "Marc Tecke",
            link: "https://www.facebook.com/marctecke"
        },
    ]

    return (
        <footer className="text-gray-400 bg-primary/10 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-full md:w-1/3 shrink-0 md:mx-0 mx-auto text-left">
            <Logo size="text-4xl" />
            <p className="mt-2 text-sm text-gray-500">Designing the Future of Your Brand Identity</p>
            </div>
            <div className="grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left">
            <div className="md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">PAGES</h2>
                <nav className="list-none mb-10 flex flex-col gap-1">
                {pages.map((page, i) => (
                    <li key={i} className="text-gray-400 hover:text-white cursor-pointer">
                        <Link to={page.link}>{page.name}</Link>
                    </li>
                ))}
                </nav>
            </div>
            <div className="md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CONTACT</h2>
                <nav className="list-none mb-10 flex flex-col gap-1">
                {socialLinks.map((socialLink, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-400 hover:text-white"> 
                    {socialLink.logo}
                    <a href={socialLink.link} target="_blank">{socialLink.content}</a>
                    </li>
                ))}
                </nav>
            </div>
            </div>
        </div>
        <div className="bg-primary-800 bg-opacity-75">
            <div className="container mx-auto py-4 px-5 flex items-center justify-between gap-2 flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left">Copyright © {new Date().getFullYear()} Marc Tecke
            </p>
            <span className="flex items-center gap-4">
                <a className="text-gray-400" href="https://wa.me/33744999389" target="_blank">
                    <RiWhatsappLine className="w-5 h-5" />
                </a>
                <a className="text-gray-400" href="mailto:marctecke@gmail.com" target="_blank">
                    <Mail className="w-5 h-5" />
                </a>
                <a className="text-gray-400" href="https://www.instagram.com/marc.tecke/" target="_blank">
                    <InstagramIcon className="w-5 h-5" />
                </a>
                <a className="text-gray-400" href="https://www.facebook.com/marctecke" target="_blank">
                    <FacebookIcon className="w-5 h-5" />
                </a>
            </span>
            </div>
        </div>
        </footer>
    )
}

export default Footer