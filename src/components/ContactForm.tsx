import { type FormEvent, useState } from "react";

import { sendContactMessage } from "../api/contact";

import { MdOutlineCall, MdOutlineEmail } from "react-icons/md"
import Footer from "../component/footer";
import { Link } from "react-router-dom";
import Notification from "./Notification";


export default function ContactForm() {

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [subject, setSubject] = useState("");

const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false)


const [errors, setErrors] = useState<{
name?: string;
email?: string;

subject?: string;

message?: string;

}>({});



const [notification, setNotification] = useState<{

message: string;

type: "success" | "error";

} | null>(null);



const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);



const validateForm = () => {

const newErrors: typeof errors = {};



if (!name.trim()) newErrors.name = "Name is required";



if (!email.trim()) {

newErrors.email = "Email is required";

} else if (!validateEmail(email)) {

newErrors.email = "Invalid email format";

}


if (subject.trim().length < 5) {
 newErrors.subject = "Subject must be at least 5 characters";
}

if (message.trim().length < 15) {
 newErrors.message = "Message must be at least 15 characters";
}


setErrors(newErrors);

return Object.keys(newErrors).length === 0;

};



const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

e.preventDefault();



if (!validateForm()) return;
setLoading(true)

console.log({
    name,
    email,
    subject,
    message,
})
try {

await sendContactMessage({
name: name.trim(),
 email: email.trim(),
 subject: subject.trim(),
 message: message.trim(),

});



setNotification({

message: "Message sent successfully!",

type: "success",

});



// reset form

setName("");
setEmail("");
setSubject("");
setMessage("");

setErrors({});

} catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to send message";

    setNotification({
        message: errorMessage,
        type: "error",
    });
} finally {
    setLoading(false);
}

};



return (

<>

{notification && (

<Notification

message={notification.message}

type={notification.type}

onClose={() => setNotification(null)}

/>

)}
<div className="bg-[#f4f9ff] px-5 md:px-10 pt-10 mt-15">
  <header className="flex flex-col mb-10 justify-center items-center md:justify-start md:items-start">
    <h1 className="text-4xl md:text-6xl font-semibold mb-5 ">Get in <strong className="italic text-[#005bbf]">Touch</strong></h1>
    <p className="md:w-[80%] lg:w-[50%] text-center md:text-start text-gray-700">Our health specialists and support team are here to curate your journey. Whether you're navigating general care or the unique path of motherhood, your voice is our guide.</p>
  </header>
  <section className="flex flex-col items-center w-full lg:flex-row gap-10">
    <form onSubmit={handleSubmit} className="bg-[#f0f3f7] mt-5 rounded-2xl md:rounded-4xl p-5 md:p-10 w-full ">
        <div className="flex w-full justify-between  flex-col mb-6 rounded-2xl gap-5">
         <div className="flex w-full justify-between md:flex-row flex-col mb-6 rounded-2xl gap-5">
       <div className="flex flex-col gap-2 w-full">
        <label>Name</label>
        <input type="text" placeholder="benedicta"  value={name} onChange={(e) => setName(e.target.value)} className="bg-[#ffffff] focus:border outline-0 focus:border-[#005bbf] py-4 w-full px-2 rounded-xl"/>
        {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div> 
        <div className="flex flex-col gap-2 w-full">
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="benn@gmail.com" className="bg-[#ffff] focus:border outline-0 focus:border-[#005bbf]  w-full px-2 py-4 rounded-xl" />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        </div>
        <div>
      <label>Subject</label>
<input
type="text"
placeholder="Subject"
value={subject}
onChange={(e) => setSubject(e.target.value)}
className="bg-[#ffff] focus:border outline-0 focus:border-[#005bbf]  w-full px-2 py-4 rounded-xl" 
/>

{errors.subject && <p className="text-red-500">{errors.subject}</p>}

</div>
        <div className="flex flex-col gap-2 w-full">
            <label htmlFor="">How can we help</label>
            <textarea placeholder="Tell us about your needs" value={message} onChange={(e) => setMessage(e.target.value)} className="bg-[#ffff] h-32 focus:border outline-0 focus:border-[#005bbf]  w-full px-2 py-4 rounded-xl"></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        
         </div>
     <button type="submit" className="bg-[#005bbf] font-bold rounded-4xl text-white w-full lg:w-fit py-3 px-6 ">{loading ? "sending....." : "send message"}</button>
 
    </form>
    <div className="flex flex-col rounded-4xl w-full lg:w-[50%] p-6 gap-10  bg-slate-200">
        <h1  className="font-semibold text-lg md:text-xl font-heading">Connect Directly</h1>
        <div className="flex items-center gap-4">
            
            <div className="bg-[#dfecfc] rounded-xl inline-block p-3 mb-2">
                                <MdOutlineCall className=" text- text-2xl"/>
            </div>
            <div>
                <p className="font-semibold text-sm">Care Hotline</p>
                <p className="text-gray-700">+234-708-567-9988</p>
                <p className="font-semibold text-amber-700" > AVAILABLE 24/7 FOR YOUR HEALTH CARE</p>
            </div>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-[#dfecfc] rounded-xl inline-block p-3 mb-2">
                  <MdOutlineEmail />
            </div> 
           <div>
            <p className="font-semibold text-sm">General Support</p>
            <p className="text-gray-700">care@vitals.health</p>
           </div>
        </div>
    </div>
  </section>
  <section className="flex gap-4 flex-col text-center items-center mt-10 md:mt-20 bg-[#005bbf] mb-20 rounded-4xl px-4 py-10 md:py-15">
        <h2 className="text-2xl font-heading md:text-4xl font-heading text-white font-semibold">Ready to resume your journey?</h2>
        <p className="text-white md:w-[40%]">Start your journey today and experience a more intuitive way to manage your well-being.</p>
        <Link to="/" className="bg-white text-blue-700 font-semibold mt-4 px-8 py-4 rounded-4xl w-fit shadow-md shadow-[#005bbf]/30 cursor-pointer">Join Waitlist</Link>
    </section>
 
    <Footer />
  </div>



</>

);

}