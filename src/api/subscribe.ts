import type { SubscribeData } from "../types";



export const subscribeUser = async (data: SubscribeData) => {

const response = await fetch("https://vitals-api-service.fly.dev/api/waitlist", {

method: "POST",

headers: {

"Content-Type": "application/json",

},

body: JSON.stringify(data),

});



if (!response.ok) {

throw new Error("Failed to subscribe");

}



return response.json();

};