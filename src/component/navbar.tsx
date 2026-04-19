import { useState } from "react";

import { Link, useLocation } from "react-router-dom";



const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const location = useLocation();



const handleClick = () => setMenuOpen(false);



const linkStyle = (path: string) =>

`relative transition duration-300 ${

location.pathname === path

? "text-[#005bbf] border-b-3 border-[#005bbf] font-bold"

: "text-gray-800  hover:text-[#005bbf] "

}`;



return (

<header className="fixed w-full top-0 z-50 bg-white shadow-md">

<div className="flex items-center justify-between px-6 py-4">



{/* Left side */}

<div className="flex w-full items-center gap-8">

<Link to="/"  >
<img src="/images/logo1.png" alt="" className="w-25 flex h-5 items-center object-cover"/>


</Link>



{/* Desktop links */}

<nav className="hidden md:flex gap-6">

<Link to="/" onClick={handleClick} className={`${linkStyle("/")} text-lg`}>

Home

</Link>

<Link to="/about" onClick={handleClick} className={`${linkStyle("/about")} text-lg`}>

About

</Link>

<Link to="/features" onClick={handleClick} className={`${linkStyle("/features")} text-lg`}>

Features

</Link>

<Link to="/contact" onClick={handleClick} className={`${linkStyle("/contact")} text-lg`}>

Contact

</Link>

</nav>

</div>



{/* Hamburger */}

<div

className="md:hidden flex flex-col cursor-pointer"

onClick={() => setMenuOpen(!menuOpen)}

>

<span

className={`h-0.5 w-6 bg-black mb-1 transition duration-300 ${

menuOpen ? "rotate-45 translate-y-1.5" : ""

}`}

></span>

<span

className={`h-0.5 w-6 bg-black mb-1 transition duration-300 ${

menuOpen ? "opacity-0" : ""

}`}

></span>

<span

className={`h-0.5 w-6 bg-black transition duration-300 ${

menuOpen ? "-rotate-45 -translate-y-1.5" : ""

}`}

></span>

</div>

</div>



{/* Mobile Menu */}

<div

className={`md:hidden bg-white flex flex-col items-center gap-6 py-2 transition-all duration-300 ${

menuOpen ? "max-h-96 opacity-100" : "max-h-0 overflow-hidden opacity-0"

}`}

>

<Link to="/" onClick={handleClick} className={linkStyle("/")}>

Home

</Link>

<Link to="/about" onClick={handleClick} className={linkStyle("/about")}>

About

</Link>

<Link to="/features" onClick={handleClick} className={linkStyle("/features")}>

Features

</Link>

<Link to="/contact" onClick={handleClick} className={linkStyle("/contact")}>

Contact

</Link>

</div>

</header>

);

};



export default Navbar;