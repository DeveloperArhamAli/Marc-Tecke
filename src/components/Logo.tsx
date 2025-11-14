import { Link } from "react-router"

function Logo() {
    return (
        <div className="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
            <Link to="/">
                Marc Tecke
            </Link>
        </div>
    )
}
export default Logo