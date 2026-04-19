import { type FormEvent, useState } from "react";

import { subscribeUser } from "../api/subscribe";
import Notification from "./Notification";

export default function Form() {

const [email, setEmail] = useState("");

const [name, setName] = useState("");

const [marketingConsent, setMarketingConsent] = useState(false);

const [errors, setErrors] = useState<{ email?: string; name?: string; marketingConsent?: string }>({});

const [loading, setLoading] = useState(false);

const [notification, setNotification] = useState<{

message: string;

type: "success" | "error";

} | null>(null);



const validateEmail = (email: string) => {

return /\S+@\S+\.\S+/.test(email);

};



const validateForm = () => {

const newErrors: { email?: string; name?: string; marketingConsent?: string } = {};



if (!name.trim()) {

newErrors.name = "Name is required";

}

if (!marketingConsent) {
 newErrors.marketingConsent = "You must agree to continue";
 }

if (!email.trim()) {

newErrors.email = "Email is required";

} else if (!validateEmail(email)) {

newErrors.email = "Invalid email format";

}



setErrors(newErrors);

return Object.keys(newErrors).length === 0;

};



const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

e.preventDefault();



if (!validateForm()) return;

setLoading(true);

try {

await subscribeUser({

email,

name,

marketingConsent,

});



setNotification({

message: "Successfully subscribed!",

type: "success",

});



// reset form

setEmail("");

setName("");

setMarketingConsent(false);

setErrors({});

} catch (error) {

console.error(error);



setNotification({

message: "Something went wrong",

type: "error",

});

}finally{
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

<form onSubmit={handleSubmit} className="bg-[#ffffff] mt-5 rounded-2xl md:rounded-4xl p-5 md:p-10 shadow-lg">
         <div className="flex w-full justify-between md:flex-row flex-col mb-6 rounded-2xl gap-5">
       <div className="flex flex-col gap-2 w-full">
        <label>Name</label>
        <input type="text"
value={name}

onChange={(e) => setName(e.target.value)}  placeholder="benedicta" className="bg-[#f4f9ff] focus:border outline-0 focus:border-[#005bbf] py-2 w-full px-2 rounded"/>

{errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div> 
        <div className="flex flex-col gap-2 w-full">
            <label>Email</label>
            <input type="text" 
value={email}

onChange={(e) => setEmail(e.target.value)} placeholder="benn@gmail.com" className="bg-[#f4f9ff] focus:border outline-0 focus:border-[#005bbf]  w-full px-2 py-2 rounded" />
{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        
    </div>
    <label>

<input

type="checkbox"

checked={marketingConsent}

onChange={(e) => setMarketingConsent(e.target.checked)}

/>

I agree to marketing emails

</label>
{errors.marketingConsent && <p style={{ color: "red" }}>{errors.marketingConsent}</p>}
    <button type="submit" className="bg-[#005bbf] font-bold rounded-4xl text-white w-full py-2 ">{loading ? "Processing..." : "Secure My Spot"}</button>
 
    </form>
   
</>
);

}