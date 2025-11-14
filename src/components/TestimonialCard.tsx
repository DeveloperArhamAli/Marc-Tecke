import { motion } from 'framer-motion'

interface TestimonialCardProps {
    name: string;
    designation: string;
    image: string;
    message: string;
    keyProp: number;
}

function TestimonialCard({
    name,
    designation,
    image,
    message,
    keyProp
}: TestimonialCardProps) {
    return (
        <motion.div key={keyProp} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: keyProp * 0.1 }} viewport={{ once: true }}>
            <div className="relative bg-primary/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all duration-300">

                <div className='flex'>
                    <span className="text-primary/40 text-9xl font-serif">“</span>

                    <p className="text-white/80 pl-10 pr-2 leading-relaxed text-left h-fit pb-2">{message}</p>
                </div>

                <div className="flex pl-23 gap-4">
                    <div className="size-14 rounded-full overflow-hidden border border-white/20 shadow-md">
                        <img src={image} alt={name} className="w-full h-full object-cover" />
                    </div>

                    <div className='flex flex-col items-start'>
                        <h3 className="text-lg font-semibold text-white">{name}</h3>
                        <p className="text-primary text-sm">{designation}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
export default TestimonialCard