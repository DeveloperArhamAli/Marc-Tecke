import { Link } from "react-router"
import Logo from "./Logo"

function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl z-100 border-b border-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Logo />
            <div className="hidden md:flex items-center gap-8">
                <Link
                    to="#services"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                Services
                </Link>
                <Link
                    to="#portfolio"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                Portfolio
                </Link>
                <Link
                    to="/contact"
                    className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium"
                >
                Contact
                </Link>
            </div>
            </div>
        </nav>
    )
}
export default Navbar