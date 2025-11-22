import { Link } from "react-router";

interface ButtonProps {
    text: string;
    to?: string;
    icon?: React.ReactNode;
    className?: string;
}

function Button({ text, to, icon, className = "" }: ButtonProps) {
    const ButtonContent = (
        <button
        className={`px-3 py-2 rounded flex items-center gap-1 cursor-pointer ${className}`}
        >
            {text}
            {icon}
        </button>
    );

    return to ? <Link to={to}>{ButtonContent}</Link> : ButtonContent;
}

export default Button;
