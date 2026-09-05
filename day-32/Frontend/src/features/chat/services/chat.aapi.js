import { io } from "socket.io-client";

const URL = "http://localhost:3000"

export const initializeSocketConnection = () => {

    const socket = io(URL,{
        withCredentials: true
    })

    socket.on("connect", () => {
        console.log("Scoket connection established!")
    })
    
}