import { CiFlag1 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaLaptopMedical } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import { MdOutlineNotificationsActive } from "react-icons/md";
import Footer from "../component/footer";
import { PiBaby } from "react-icons/pi"
import { Link } from "react-router-dom";
export default function About(){
    return (<div  className="bg-[#f4f9ff] px-5 md:px-10 pt-10 mt-15 ">
    <div className=" bg-[#f4f9ff] flex flex-col md:w-full  md:flex-row md:justify-between md:items-center gap-10">
        <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl font-heading">About Vitals</h1>
            <p className="text-gray-800 md:text-lg lg:w-[70%]">Unified health tracking designed for every stage of life. From <strong className="text-[#1A73E8]">General Care</strong> to specialized <strong className="text-amber-700">Mother & Baby </strong>support.</p>
            <div className="flex gap-1 md:gap-4 flex-col lg:flex-row">
                <Link to="/"  className="bg-[#005bbf] font-semibold mt-4 px-8 py-4 md:px-8 md:py-4 rounded-4xl w-fit text-white shadow-md shadow-[#005bbf]/30 cursor-pointer">Join WaitList</Link>
                <Link to="/features"  className="bg-gray-300 font-semibold mt-2 md:mt-4 md:px-8 md:py-4 px-8 py-4 rounded-4xl w-fit text-black shadow-md shadow-gray-300/30 cursor-pointer">Explore Features</Link>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src="/images/tech 4.png" className="rounded-4xl md:h-[500px] md:w-full" alt="" />
        </div>
    </div>
    <section className="mt-10 md:mt-20 md:flex-row md:w-full flex-col flex gap-5 mb-10">
        <div className="bg-[#f2f2fd] rounded-4xl md:p-10 p-5 md:w-1/2 flex flex-col">
            
           <div className="w-fit rounded-xl p-3 bg-[#005bbf] mb-5">
               <CiFlag1 className="text-2xl text-white " />
            </div>
           <p className="text-2xl font-heading mb-4 font-semibold font-heading">Our Mission</p>
           <p className="text-gray-800 md:text-lg ">To empower every individual with the tools they need to manage their health with confidence. We believe health management shouldn't be a burden; it should be a seamless, integrated part of your daily ritual.</p>
        </div>
        <div className="bg-[#f2f2fd] md:p-10 md:w-1/2 rounded-4xl p-5 flex flex-col">
            <div className="w-fit rounded-xl p-3 mb-4 bg-amber-700">
               <FaEye className="text-2xl text-white" />
            </div>
            
            <p className="text-2xl font-heading mb-4 font-semibold font-heading">Our Vission</p>
            <p className="text-gray-800 md:text-lg ">A world where accessible, simple, and AI-supported guidance is available to everyone. We are particularly committed to supporting mothers through their journey, providing specialized tracking that evolves as their baby grows.</p>
        </div>
    </section >


    <section className="mt-20">
        
            
            <div className="text-center">
                <h1 className="text-2xl font-heading tracking-wide font-semibold mb-2 md:text-4xl">How It Helps You</h1>
              <p className="text-gray-700 text-sm md:text-lg">Modern health management simplified through thoughtful technology.</p>
            </div>
            <div className="grid gap-5 grid-cols-1 mb-20 mt-10 md:grid-cols-2" >
        <div className="bg-[#ffffff] rounded-2xl py-8 px-6 shadow-lg">
            <FaLaptopMedical className="text-[#266fc9] mb-4 text-2xl" />
            <p className="mb-4 font-semibold text-lg md:text-xl">Medication</p>
            <p className="text-gray-800 text-md md:text-lg">Never miss a dose or a check-up with our integrated clinical scheduler.</p>
        </div>
        <div className="bg-[#ffffff] rounded-2xl py-8 px-6 shadow-lg">
            <MdOutlineNotificationsActive className="text-[#266fc9] mb-4 text-2xl" />
            <p className="mb-4 font-semibold text-lg md:text-xl">Smart Reminders</p>
            <p className="text-gray-800 text-md md:text-lg">Context-aware notifications that nudge you toward healthier habits throughout the day.</p>
        </div>
        <div className="bg-[#ffffff] rounded-2xl  py-8 px-6 shadow-lg">
            <PiBaby className="text-amber-700 mb-4 text- text-2xl " />
            <p className="mb-4 font-semibold text-lg md:text-xl">Mother & Baby Tracking</p>
            <p className="text-gray-800 text-md md:text-lg">Specialized milestones, nursing logs, and growth charts tailored for new parents.</p>
        </div>
        <div className="bg-[#ffffff] rounded-2xl  py-8 px-6 shadow-lg">
            <GiBrain className="text-[#266fc9] mb-4 text-2xl" />
            <p className="mb-4 font-semibold text-lg md:text-xl">AI-Driven Insights</p>
            <p className="text-gray-800 text-md md:text-lg">Sophisticated patterns identified from your data to help you understand your health trends.</p>
        </div>
        </div>
    </section>


    <section className="bg-[#f2f2fd] mb-20 rounded-4xl p-5 md:p-10 flex md:items-start flex-col">
        <h2 className="text-2xl md:text-4xl text-center font-heading mb-4 font-semibold font-heading">Our Story</h2>
        <p className="text-gray-700 md:text-lg lg:w-[80%] ">Vitals was born from a shared passion for bridging the gap between medical data and human care. Our team of doctors, designers, and engineers came together to create a platform that treats
             you like a person, not just a patient.</p>
             <div className="flex items-center mt-10 justify-center gap-4">
                <div className="flex gap-2 flex-col items-center">
                    <img src="/images/tech 1.png" alt=""  className="w-12 h-12 rounded-full" />
                    <p className="text-smfont-heading font-light text-gray-700 tracking-wide">FOUNDER</p>
                </div>
                <div className="flex gap-2 flex-col items-center">
                    <img src="/images/tech 2.png"  className="w-12 h-12 rounded-full" alt="" />
                    <p className="text-sm font-heading font-light text-gray-700 tracking-wide">TECH LEAD</p>
                </div>
                <div className="flex gap-2 flex-col items-center">
                    <img src="/images/tech 3.png"  className="w-12 h-12 rounded-full" alt="" />
                    <p className="text-sm font-heading font-light text-gray-700 tracking-wide">DESGIN</p>
                </div>
             </div>
    </section>
    <section className="flex gap-4 flex-col text-center items-center bg-[#d7e4fa] mb-20 rounded-4xl px-4 py-20">
        <h2 className="text-2xl font-heading md:text-4xl font-semibold">Ready to join the health revolution?</h2>
        <p className="text-gray-800 md:w-[40%]">Start your journey today and experience a more intuitive way to manage your well-being.</p>
        <Link to="/" className="bg-[#005bbf] font-semibold mt-4 px-8 py-4 rounded-4xl w-fit text-white shadow-md shadow-[#005bbf]/30 cursor-pointer">Join Waitlist</Link>
    </section>
    <Footer />

    </div>)
}