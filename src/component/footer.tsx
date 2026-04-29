import { FaTwitter } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Footer(){
    return(<footer className="bg-[#fafcff] px-5 mb-10 md:px-10 pt-10 mt-15">
    <section className="w-full flex flex-col lg:gap-10 gap-5 lg:flex-row lg:justify-between lg:items-start ">
        <div className="mb-4 flex-1">
          
                <img src="/images/logo1.png" alt="" className="w-25 mb-4 flex h-5 items-center object-cover"/>

            <p className="text-gray-600 md:w-[80%]">Don’t miss what matters for your health. <br/>Providing accessible, data-driven healthcare management for individuals across the globe. </p>
        </div>
        <div  className="flex flex-col gap-5 mb-4 flex-1">
            <p className="font-bold text-xl text-gray-800">Navigations</p>
            <div className="flex gap-5 flex-col">
                <Link to="/" className="text-gray-600">Home</Link>
                <Link to="/about" className="text-gray-600">About</Link>
                <Link to="/features" className="text-gray-600">Features</Link>
                <Link to="/contact" className="text-gray-600">Contact</Link>
                
            </div>
        </div>
        <div  className="flex flex-col gap-5 mb-4 flex-1">
            <p  className="font-bold text-xl text-gray-800">Get in Touch</p>
            <div className="flex gap-2 items-center">
                
                <MdEmail />
                <p className="text-gray-600" >vitals.supportemail@gmail.com</p>
            </div>
            
        </div>
        <div className="flex flex-col gap-5 flex-1">
            <p className="font-bold text-xl text-gray-800">Follow us on</p>
            <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/vi.ta.ls/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-[#005bbf] text-xl hover:opacity-70 transition" />
  </a>
                <a href="https://www.tiktok.com/@vi.ta.ls" target="_blank" rel="noopener noreferrer">
    <FaTiktok className="text-[#005bbf] text-xl hover:opacity-70 transition" />
                    </a>
                    <a href="https://linkedin.com/in/ " target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-[#005bbf] text-xl hover:opacity-70 transition" />
                    </a>
                    <a href="https://twitter.com/ " target="_blank" rel="noopener noreferrer">
  <FaTwitter className="text-[#005bbf] text-xl hover:opacity-70 transition" />
</a>
                    
            </div>
        </div>
    </section>
    <hr className="text-gray-100 border mb-4 mt-5" />
    <div className="flex justify-between items-start md:items-center md:flex-row flex-col gap-5">
        <p className="text-gray-600">© 2026 Vital. All right reserved</p>
        <div className="flex gap-5">
            <p className="text-gray-600">Privacy</p>
            <p className="text-gray-600">Terms of service</p>
        </div>
    </div>
    

    </footer>)
}