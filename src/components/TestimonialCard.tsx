import { motion } from "framer-motion";

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
  keyProp,
}: TestimonialCardProps) {
  return (
    <motion.div
      key={keyProp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: keyProp * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative bg-primary/5 backdrop-blur-xl rounded-2xl p-8 max-md:p-5 border border-white/10 hover:border-primary/50 transition-all duration-300">

        {/* QUOTE + MESSAGE */}
        <div className="flex max-md:flex-col max-md:gap-3">
          <span className="text-primary/40 text-9xl max-md:text-6xl font-serif leading-none">
            “
          </span>

          <p className="text-white/80 pl-10 max-md:pl-3 pr-2 leading-relaxed text-left pb-2 text-xs">
            {message}
          </p>
        </div>

        {/* FOOTER: IMAGE + NAME */}
        <div className="flex items-center gap-4 mt-4 max-md:mt-3">
          <div className="size-14 max-md:size-12 rounded-full overflow-hidden border border-white/20 shadow-md shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-lg max-md:text-base font-semibold text-white">
              {name}
            </h3>
            <p className="text-primary text-sm max-md:text-xs">
              {designation}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;
