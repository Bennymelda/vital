import { useEffect } from "react";



interface Props {

message: string;

type: "success" | "error";

onClose: () => void;

}



export default function Notification({ message, type, onClose }: Props) {

useEffect(() => {

const timer = setTimeout(() => {

onClose();

}, 3000); // disappears after 3s



return () => clearTimeout(timer);

}, [onClose]);



return (

<div

style={{

position: "fixed",

top: "20px",

right: "20px",

background: "white",

padding: "16px 20px",

borderRadius: "10px",

boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

borderLeft: `5px solid ${type === "success" ? "green" : "red"}`,

minWidth: "250px",

zIndex: 1000,

}}

>

<p style={{ margin: 0, color: "#333" }}>{message}</p>

</div>

);

}