import { Link } from "react-router"

function Logo({ size = "text-2xl" }: { size?: string }) {
    return (
        <div className={`font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent ${size}`}>
            <Link to="/">
                Marc Tecke
            </Link>
        </div>
    )
}
export default Logo