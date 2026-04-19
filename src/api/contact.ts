import type { ContactData } from "../types";

export const sendContactMessage = async (data: ContactData) => {

const response = await fetch("https://vitals-api-service.fly.dev/api/contact", {

method: "POST",

headers: {

"Content-Type": "application/json",

},

body: JSON.stringify(data),

});



const result = await response.json();



console.log("SERVER RESPONSE:", result); // 👈 ADD THIS



if (!response.ok) {

throw new Error(JSON.stringify(result)); // 👈 SHOW FULL ERROR

}



return result;

};