import { FaLaptopMedical } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import {CiCamera} from "react-icons/ci"
import {BiFirstAid} from "react-icons/bi"
import {BsGraphUp} from "react-icons/bs"
import {TbBook} from "react-icons/tb"
import Footer from "../component/footer";
import { MdOutlineNotificationsActive, MdOutlineTimeline, MdOutlineVaccines } from "react-icons/md"
export default function Features() {
    return(<div className="bg-[#f4f9ff] lg:px-10 px-5 mt-18">
        <header className="   pb-20 items-center flex flex-col mb-10  w-full gap-2 md:gap-5 pt-20 rounded-2xl md:rounded-4xl mt-10 bg-[#e9f3ff]">
            <h1 className="font-semibold text-4xl md:text-6xl lg:text-7xl text-center font-heading" >Explore Our Features</h1>
            <p className="text-gray-800 text-center md:text-lg lg:w-[50%]">From daily health tasks to pregnancy tracking, Vitals supports your well-being every step of the way.</p>
            <button className="bg-[#005bbf] font-semibold mt-4 px-8 py-4 md:px-8 md:py-4 rounded-4xl w-fit text-white shadow-md shadow-[#005bbf]/30 cursor-pointer">Get Started</button>
        </header>
        <main>
            <section className="flex mb-10 flex-col md:flex-row justify-between w-full  ">
                <div className="bg-[#ffffff] md:w-1/2 rounded-tr-4xl  rounded-tl-4xl md:rounded-l-none md:rounded-r-none md:rounded-tl-4xl  md:rounded-bl-4xl py-8 px-6 shadow-md">
                 <div className="bg-[#f5e7de] rounded-xl inline-block p-3 mb-4 ">
                    <MdOutlineTimeline className="text-amber-700 text- text-2xl "/>
                </div>
                <h2 className="mb-4 font-semibold text-xl font-heading md:text-2xl">Pregnancy Timeline</h2>
                 <p className="text-gray-800 text-md md:text-lg mb-2">Follow a detailed journey through every trimester with milestones and health advice for expectant mothers.</p>
                 <div className="flex gap-2">
                    <div className="bg-[#f5e7de] font-semibold mt-4 px-8 py-4 md:px-6 md:py-4 rounded-xl w-fit text-black">
                        <p className="text-sm text-gray-700 mb-1">UPDATES</p>
                        <p className="font-bold">Weeky Insights</p>
                    </div>
                    <div className="bg-gray-300 font-semibold mt-2 md:mt-4 md:px-6 md:py-4 px-8 py-4 rounded-xl w-fit   ">
                        <p className="text-sm text-gray-700 mb-1">SUPPORT</p>
                        <p className="font-bold">Trimester-Ready</p>
                    </div>
                 </div>
                </div>
                <div className="md:w-1/2 ">
                 <img src="/images/pregnant lady.png" className="w-full md:rounded-l-none md:rounded-r-none md:rounded-tr-4xl rounded-br-4xl rounded-bl-4xl md:rounded-br-4xl h-[500px] object-cover" alt="" />
                </div>
            </section>

            <section>
                <div className="flex mb-5 w-full flex-col md:flex-row justify-between gap-10">
                    <div className="bg-[#ffffff] w-full rounded-2xl  py-8 pr-10 px-6 ">
                        <div className="bg-[#e9f2fd]  rounded-xl inline-block p-3 mb-2">
                            <FaLaptopMedical className="text-[#266fc9] text-2xl" />
                        </div> 
                        <p className="mb-4 font-semibold text-lg md:text-xl">Medication Management</p>
                        <p className="text-gray-800 text-md lg:text-lg">Smart reminders and automated interaction checks to ensure your prescriptions are managed safely and effectively.</p>
                        <div className="flex bg-[#f2f8ff] px-6 py-2 rounded-xl gap-5 mt-5 items-center">
                            <div className="w-10 flex-col justify-center flex items-center h-10 rounded-full bg-[#005bbf] ">
                                <MdOutlineNotificationsActive className="text-2xl  text-white"/>
                            </div>
                            <p>Auto-reminders active for all prescriptions</p>
                        </div>
                    </div>
                    <div className="bg-[#005bbf]  md:w-[40%]  rounded-2xl  py-8 px-6">
                        <div className="bg-[#348be7] rounded-xl inline-block p-3 mb-5 ">
                           <CiCamera className="text-white text-2xl" />
                        </div>
                        
                        <p className="mb-4 font-semibold text-white text-lg md:text-xl">Medicine Upload</p>
                        <p className="text-white text-md lg:text-md">Simply scan medicine labels for instant safety information and automatic health cataloging.</p>
                    </div>
                </div>
                <div className="flex justify-between flex-col md:flex-row gap-5 mb-5 items-center">
                    <div className="bg-[#ffffff] rounded-2xl  py-8 px-6 ">
                        <div className="bg-[#f5e7de] rounded-xl inline-block p-3 mb-2 ">
                            <BsGraphUp className="text-amber-700 text- text-2xl "/>
                        </div>
                        <p className="mb-4 font-semibold text-lg md:text-xl">Symptom Logging</p>
                        <p className="text-gray-800 text-md lg:text-lg">Track daily wellness trends and symptoms to help identify health patterns over time.</p>
                    </div>
                    <div className="bg-[#ffffff] rounded-2xl  py-8 px-6 
                    ">
                        <div className="bg-[#e9f2fd]  rounded-xl inline-block p-3 mb-2">
                          <GiBrain className="text-[#266fc9] text-2xl" />
                        </div>
                        <p className="mb-4 font-semibold text-lg md:text-xl">AI Guidance</p>
                        <p className="text-gray-800 text-md lg:text-lg">Personalized health insights powered by AI to help you understand your data better.</p>
                    </div>
                    <div className="bg-[#ffffff] rounded-2xl  py-8 px-6 ">
                        <div className="bg-[#f5e7de] rounded-xl inline-block p-3 mb-2 ">
                            <BiFirstAid className="text-amber-700 text- text-2xl "/>
                        </div>
                        <p className="mb-4 font-semibold text-lg md:text-xl">Antenatal Reminders</p>
                        <p className="text-gray-800 text-md lg:text-lg">Never miss a prenatal check-up with automated alerts tailored to your pregnancy stage.</p>
                    </div>
                </div>

                <div className="flex w-full flex-col md:flex-row  gap-10">
                    <div className="bg-[#ffffff] rounded-2xl md:w-[40%]  py-8 px-6 ">
                        <div className="bg-[#f5e7de] rounded-xl inline-block p-3 mb-2 ">
                            <TbBook className="text-amber-700 text- text-2xl "/>
                        </div>
                        <p className="mb-4 font-semibold text-lg md:text-xl">Weekly Guidance</p>
                        <p className="text-gray-800 text-md md:text-lg">Stage-specific health tips and expert articles curated for your unique journey.</p>
                    </div>
                    <div className="bg-amber-700  rounded-2xl w-full  py-8 px-6 flex-1">
                        <div className="bg-[#ffc19b] rounded-xl inline-block p-3 mb-5">
                            <MdOutlineVaccines className="text-amber-700 text- text-2xl"/>
                        </div>
                        <p className="mb-4 font-semibold text-white text-lg md:text-xl">Baby Vaccination Tracking</p>
                        <p className="text-amber-50 text-md lg:text-lg">Manage post-delivery immunization schedules and log growth milestones for your little one in one secure place.</p>
                        <div className="flex mt-5 items-center gap-2">
                        <div className="rounded-4xl bg-[#9b430d]  px-4 py-2">
                        <p className="text-white text-sm">Schedule Alerts</p>
                        </div>
                        <div className="rounded-4xl bg-[#9b430d]  px-4 py-2">
                          <p className="text-white text-sm">Milestone Logs</p>
                        </div>
                            
                           
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex gap-4 flex-col text-center items-center bg-gray-200 mt-20 mb-20 rounded-4xl px-4 py-20">
        <h2 className="text-2xl font-heading md:text-4xl font-semibold">Ready to start your journey?</h2>
        <p className="text-gray-800 md:w-[40%]">Start your journey today and experience a more intuitive way to manage your well-being.</p>
        <button className="bg-[#005bbf] font-semibold mt-4 px-8 py-4 rounded-4xl w-fit text-white shadow-md shadow-[#005bbf]/30 cursor-pointer">Join Waitlist</button>
    </section>
        </main>
        <Footer />
    </div>)
}