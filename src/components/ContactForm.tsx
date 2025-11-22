import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRef } from "react"
import emailjs from '@emailjs/browser';

function ContactForm() {
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [disabled, setDisabled] = useState(false)
    const form = useRef<HTMLFormElement | null>(null);

    const contact = () => {
        setError("");
        setSuccess("");
        setDisabled(true);
    
        const button = document.getElementById("sendMessageButton") as HTMLButtonElement | null;
        if (button) {
            button.innerHTML = "Sending...";
        }
    
        if (!form.current) {
            setError("Form not found.");
            setDisabled(false);
            if (button) {
                button.innerHTML = "Send Message";
            }
            return;
        }
    
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                { publicKey: import.meta.env.VITE_PUBLIC_KEY }
            )
                .then(() => {
                setSuccess("Message Sent Successfully");
                form.current?.reset();
                setDisabled(false);
                if (button) {
                    button.innerHTML = "Send Message";
                }
            })
            .catch(() => {
                setError("Failed to send message. Please try again.");
                setDisabled(false);
                if (button) {
                    button.innerHTML = "Send Message";
                }
            });
    };    
    
return (
    <div className="tech-card p-8 h-full pointer-events-auto ">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-400">Get in touch</h2>
        <p className="text-white/70 mb-8">Fill out the form and our team will get back to you within 12 hours.</p>

        {error && <p className="text-red-600 mb-2 text-center">{error}</p>}

        {success && <p className="text-green-600 mb-2 text-center">{success}</p>}

        <form onSubmit={handleSubmit(contact)} ref={form} className="space-y-3">

            <input type="text" className="bg-white/5 w-full px-3 py-2 rounded-lg outline-0" placeholder="Your name" {...register("name", {
                required: true,
            })}/>

            <input type="email" className="bg-white/5 w-full px-3 py-2 rounded-lg outline-0" placeholder="Your email" {...register("email", {
                required: true,
                validate: {
                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address"}
            })}/>

            <input type="number" className="bg-white/5 w-full px-3 py-2 rounded-lg outline-0" placeholder="Your phone number" {...register("phoneNumber", {
                required: true,
            })}/>

            <input className="bg-white/5 w-full px-3 py-2 rounded-lg outline-0" type="text" placeholder="Region/Country" {...register("subject", {
                required: true,
            })}/>

                <textarea
                    id="message" 
                    placeholder="Your message" 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus:border-cyan-400/50 focus:ring-cyan-400/20 px-3 py-2 rounded-xl w-full" 
                    rows={5} 
                    {...register("message", {
                        required: true
                    })}
                />

            <button 
                className="w-full bg-linear-to-r from-primary to-accent text-white rounded-lg py-2 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)] transition-all duration-300 flex items-center justify-center text-lg cursor-pointer" 
                disabled={disabled}
                type="submit" 
                id="sendMessageButton">
                Send Message
            </button>

        </form>
    </div>
)}
export default ContactForm