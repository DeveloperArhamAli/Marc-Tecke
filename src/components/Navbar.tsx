import { Link } from "react-router"
import Logo from "./Logo"

function Navbar() {
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/services", label: "Services" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/Pricing", label: "Pricing" },
        { to: "/contact", label: "Contact" },
    ]
    
    return (
        <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl z-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Logo />
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
export default Navbar