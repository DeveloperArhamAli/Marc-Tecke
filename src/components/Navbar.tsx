import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const [open, setOpen] = useState(false);
    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About Us" },
        { to: "/services", label: "Services" },
        { to: "/portfolio", label: "Portfolio" },
        { to: "/pricing", label: "Pricing" },
        { to: "/contact", label: "Contact" },
    ]
  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-xl z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/80"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-foreground/80 hover:text-primary text-base font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
