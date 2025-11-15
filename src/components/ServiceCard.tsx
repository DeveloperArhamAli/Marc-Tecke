import { Link } from "react-router";

interface ServiceCardProps {
    service: {
        icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
        title: string;
        description: string;
    };
}

function ServiceCard({service} : ServiceCardProps) {
    return (
        <div className="tech-card p-8 glow-hover pointer-events-auto before:pointer-events-none after:pointer-events-none">
            <div className="p-4 rounded-lg bg-linear-to-br from-primary/20 to-accent/10 w-fit mb-6">
                <service.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
            <p className="text-foreground/70 leading-relaxed text-sm mb-4">{service.description}</p>
            <Link to={"/contact"}><span className="text-primary cursor-pointer z-100"> Learn More</span></Link>
        </div>
    )
}
export default ServiceCard