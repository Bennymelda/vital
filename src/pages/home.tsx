import { CiHeart } from "react-icons/ci"
import { FaLaptopMedical } from "react-icons/fa"
import { MdPregnantWoman } from "react-icons/md"
import { FaRegCalendarAlt } from "react-icons/fa"
import { GiBrain } from "react-icons/gi"
import { MdOutlineVaccines } from "react-icons/md"
import { PiBaby } from "react-icons/pi"
import Form from "../components/form"
import Footer from "../component/footer"
import { BiSolidQuoteAltRight } from "react-icons/bi"

export default function Home(){
return(
    <div className="bg-[#f4f9ff] mt-5">
<header className="flex lg:flex-row flex-col lg:px-10 items-stretch justify-between pb-20  w-full gap-10 pt-20 px-5 bg-[#f4f9ff]">
<div className="#f7f9ff flex flex-col flex-1 ">
    <p className="px-1 md:px-2 w-fit rounded tracking-wide text-sm inline-block mb-2 py-1 uppercase bg-[#c5deff] font-semibold">Integrated wellness platform</p>
    <span className="text-4xl md:text-6xl font-bold font-heading">Your Health,</span>
    <span className="text-4xl md:text-6xl font-bold font-heading">Your Journey,</span>
    <span className="text-4xl md:text-6xl font-bold italic text-[#1A73E8] mb-4">Vitals.</span>
    <p className="w-full md:text-xl md:w-[90%] text-gray-800 leading-7 tracking-wide">Vitals is the all-in-one health companion for general care and maternal wellness. Seamlessly manage your vitals, appointments, and family milestones in one secure place.</p>
    <button className="bg-[#005bbf] mt-4 px-6 py-2 rounded-4xl w-fit text-white shadow-lg shadow-[#005bbf]/30 cursor-pointer">Join waitList</button>
    <div className="flex items-center gap-5 mt-10">
        <div className="flex ">
            <img src="/images/baby 3.png" className="w-8  h-8 rounded-full" alt="" />
            <img src="/images/baby 4.png" className="w-8 -ml-2 h-8 rounded-full"  alt="" />
            <img src="/images/baby 5.png" className="w-8 -ml-2 h-8 rounded-full" alt="" />
        </div>
        <p><strong>50K+</strong>active users trust vitals</p>
    </div>
</div>
<div className="relative ">
    <div className="">
        <img src="/images/baby 2.png" className="rounded-4xl w-full " alt="Doctor image" />
    </div>
    <div className="bg-white rounded-2xl px-4 py-4 absolute bottom-0 left-0 w-[60%] shadow-2xl">
        <div className="flex justify-between mb-4">
            <p>Daily Progress</p>
            <CiHeart  className="text-2xl text-red-800 "/>
        </div>
        <div  className="flex justify-between">
            <p className="font-bold text-xl">84%</p>
            <p className="font-semibold text-sm text-green-500">+2.4% today</p>
        </div>
        <div className="w-full mb-2 bg-gray-50 rounded-full h-2">
            <div className="bg-[#005bbf] h-2 rounded-full w-[84%]" ></div>
        </div>
      
        <p className="tracking-tight italic text-sm text-gray-500">"You're making great progress towards your goals with Vitasl!"</p>
    </div>
</div>
</header>
<section className="bg-[#f0f3f8] lg:px-10 pb-15  md:pb-10 px-5">
    <div>
        <h2 className="font-heading font-bold tracking-wide text-2xl md:text-4xl pt-10 md:pt-20">Expertly Designed by Vitals</h2>
        <p className="text-gray-800 md:w-[65%] lg:w-[70%] w-full md:mb-10 mt-2 mb-6">We've combined world-class medical management with specialized maternal care to create the most comprehensive health app available.</p>
    </div>
    <div className="flex gap-10 justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-5">
            <div className="bg-[#ffffff] rounded-4xl p-6 shadow-lg">
               <div className="bg-[#e9f2fd]  rounded-xl inline-block p-3 mb-2">
                <FaLaptopMedical className="text-[#266fc9] text-2xl" />
                </div> 
                <p className="mb-4 font-semibold text-lg md:text-xl">Medication Management</p>
                <p className="text-gray-800 text-sm md:text-md">Smart reminders and interaction checks for all your prescriptions.</p>
                <div className="w-full mb-2 mt-4 bg-gray-100 rounded-full h-1">
               <div className="bg-green-500 h-1 rounded-full w-[90%]" ></div>
                </div>
                <p className="text-green-700 font-semibold text-sm">ADHERENCE: 90%</p>
             </div>
            <div className="bg-[#ffffff] rounded-4xl p-6 shadow-lg">
                <div className="bg-[#e9f2fd]  rounded-xl inline-block p-3 mb-2">
                    <FaRegCalendarAlt className="text-[#266fc9] text-2xl"/>
                </div>
                <p className="mb-4 font-semibold text-lg md:text-xl" >Appointments</p>
                <p className="text-gray-800 text-sm md:text-md">Unified booking and telehealth integration across your provider network.</p>
            </div>
        </div>

        <div className="bg-[#f5e7de] rounded-4xl px-8 shadow-lg py-10">
            <div className="bg-[#fff4f4]   rounded-xl inline-block p-3 mb-5"  >
               < MdPregnantWoman className="text-amber-700 text- text-2xl" />
            </div>
            <p className="mb-4 font-semibold text-lg md:text-xl" >Pregnancy Timeline</p>
            <p className="text-gray-800 leading-6 text-md">Week-by-week development tracking with personalized medical insights and nutritional guidance for expectant mothers.</p>
            <div>
                <div className="flex justify-between mt-8">
                    <p className="font-semibold text-sm md:text-md">Current progress</p>
                    <p className="font-semibold text-sm md:text-md">Week 28 of 40</p>
                </div>
                <div className="w-full mb-2 mt-2 bg-[#fff4f4] rounded-full h-3">
               <div className="bg-amber-700 h-3 rounded-full w-[70%]" ></div>
                </div>
            </div>
            <div className="flex justify-between mt-10">
                <div className="flex flex-col px-8 py-2 rounded-xl items-center gap-4 bg-[#fff4f4]">
                <p className="text-amber-700">1.2kg</p>
                <p className="text-sm gray-8000">Est.Weight</p>
                 </div>
                <div className="flex flex-col px-8 py-2 rounded-xl items-center gap-4 bg-[#fff4f4]">
                <p className="text-amber-700">37.6cm</p>
                <p className="text-sm gray-8000">Est.Length</p>
               </div>
            </div>
            
        </div>
        <div className="flex flex-col gap-5 ">
            <div className="bg-[#ffffff] rounded-4xl shadow-lg p-6">
                <div className="bg-[#e9f2fd]  rounded-xl inline-block p-3 mb-2">
                    <GiBrain className="text-[#266fc9] text-2xl" />
                </div>
                <p className="mb-4 font-semibold text-lg md:text-xl">AI Gudiance</p>
                <p className="text-gray-800 text-sm md:text-md">Instant 24/7 answers via Vitals' clinical-grade AI platform.</p>
            </div>
            <div className="bg-[#ffffff] rounded-4xl shadow-lg p-6">
                <div className="bg-[#f5e7de] rounded-xl inline-block p-3 mb-2">
                    <MdOutlineVaccines className="text-amber-700 text- text-2xl"/>
                </div>
                <p className="mb-4 font-semibold text-lg md:text-xl">Vaccination Schedule</p>
                <p className="text-gray-800 text-sm md:text-md">Never miss a shot with automated tracking for your children's immunizations.</p>
                <div className="w-full mb-2 mt-4 bg-gray-100 rounded-full h-1">
               <div className="bg-green-500 h-1 rounded-full w-[70%]" ></div>
                </div>
            </div>
        </div>
        
    </div>
</section>
<section className=" bg-[#f0f3f8] lg:px-10 pb-10 px-5 rounded-2xl md:rounded-4xl">
    <div className="bg-[#ffff]  rounded-4xl px-4 py-4 md:px-8 md:py-8 flex-col-reverse md:flex-row flex w-ful gap-10 justify-between items-center ">
        <div className="md:w-1/2 w-full ">
            <div className="bg-[#f5e7de] rounded-xl inline-block p-3 mb-2 ">
                <PiBaby className="text-amber-700 text- text-2xl "/>
            </div>
            <p className="font-bold text-2xl md:text-4xl mb-5 mt-4">Baby Profile</p>
            <p className="text-gray-800 text-md">Capture every moment and metric with Vitals from birth through childhood. Log sleep cycles, feedings, and growth spurts while keeping a digital health record that travels with you.</p>
        </div>
        <div className="w-full md:w-1/2 flex">
            <img src="/images/baby.png" className="w-full rounded-2xl md:rounded-4xl" alt="" />
        </div>   
    </div>
    
</section>

<section className="lg:px-10 md:pb-20 pb-20  w-full gap-10 pt-10 md:pt-20 px-5 bg-[#f4f9ff] " >
    <div className="flex flex-col gap-2 items-center">
        <p className="font-bold text-2xl tracking-wide font-heading">What Our Users Say</p>
        <p className="text-gray-800 tracking-wide">Real stories from the families and individuals who manage their health with Vitals
             every day.</p>
    </div>
    <div className="flex justify-between md:flex-row flex-col gap-10 md:gap-10 mt-10 md:mt-20">
        <div className="bg-[#ffffff] p-5 rounded-2xl shadow-lg relative">
            <div className="absolute flex -top-5 -left-5 w-10 h-10 justify-center items-center rounded-full bg-[#005bbf]">
                <BiSolidQuoteAltRight className="text-white text-center"/>
            </div>
            <div>
                <p className="italic leading-7 tracking-tighter">"The pregnancy timeline features on Vitals were a lifesaver. Being able to track my baby's development and my own vitals in one app made me feel so much more in control."</p>
                <div className="flex items-center gap-2 mt-5">
                    <img src="/images/baby 6.png" className="w-10 h-10 rounded-full" alt="" />
                    <div className="flex flex-col">
                        <span className="tracking-wide font-bold">Elena Rodriguez</span>
                        <span className="text-sm text-gray-700">Mother of two</span>
                    </div>
                </div>
        </div>
        </div> 
            <div className="bg-[#ffffff] p-5 rounded-2xl shadow-lg relative">
               <div className="absolute flex -top-5 -left-5 w-10 h-10 justify-center items-center rounded-full bg-[#005bbf]">
                <BiSolidQuoteAltRight className="text-white text-center" />
               </div>
                <div>
                    <p className="italic leading-7 tracking-tighter">"I use the medication management feature for my elderly parents. Vitals is the only way I can keep their complex schedules straight and ensure they never miss a dose."</p>
                    <div className="flex items-center gap-2 mt-5">
                        <img src="/images/baby 7.png" className="w-10 h-10 rounded-full" alt="" />
                        <div className="flex flex-col">
                            <p className="tracking-wide font-bold">David Chen</p>
                            <p className="text-sm text-gray-700">Caregiver & Advocate</p>
                        </div>
                    </div>
                </div>
            </div>
            


        <div className="bg-[#ffffff] p-5 rounded-2xl shadow-lg relative">
            <div className="absolute flex -top-5 -left-5 w-10 h-10 justify-center items-center rounded-full bg-[#005bbf]">
                <BiSolidQuoteAltRight className="text-white text-center" />
            </div>
            <div>
                <p  className="italic leading-7 tracking-tighter">"The Vitals guidance helped me through a late-night panic when my toddler had a fever. It gave me the calm, accurate steps I needed until our pediatrician opened."</p>
                <div className="flex items-center gap-2 mt-5">
                    <img src="/images/baby 8.png" className="w-10 h-10 rounded-full"  alt="" />
                    <div className="flex flex-col">
                        <p className="tracking-wide font-bold">Sarah Jenkins</p>
                        <p className="text-sm text-gray-700">New Parent</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</section>
<section className=" w-[90%] md:w-[50%] mx-auto pb-10">
  
     <p className="font-heading text-2xl text-center font-semibold tracking-wide">Be the First to Try Vitals</p>
    <p className="text-center text-gray-700 mt-3 text-sm">Join our community of mothers prioritizing their wellness with the most empathetic health curator ever built.</p>
    {/*}
    <div className="bg-[#ffffff] mt-5 rounded-2xl md:rounded-4xl p-5 md:p-10 shadow-lg">
         <div className="flex w-full justify-between md:flex-row flex-col mb-6 rounded-2xl gap-5">
       <div className="flex flex-col gap-2 w-full">
        <label>Name</label>
        <input type="text" placeholder="benedicta" className="bg-[#f4f9ff] focus:border outline-0 focus:border-[#005bbf] py-2 w-full px-2 rounded"/>
        </div> 
        <div className="flex flex-col gap-2 w-full">
            <label>Email</label>
            <input type="text" placeholder="benn@gmail.com" className="bg-[#f4f9ff] focus:border outline-0 focus:border-[#005bbf]  w-full px-2 py-2 rounded" />
        </div>
        
    </div>
    <button className="bg-[#005bbf] font-bold rounded-4xl text-white w-full py-2 ">Secure My Spot</button>
 
    </div>
    */}
   <Form />
   
</section>
<Footer />
</div>
)
}