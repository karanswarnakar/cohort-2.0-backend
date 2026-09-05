import { Server } from "socket.io"


let io;


export function initSocket(httpServer) {
    io = new Server(httpServer, {
        cors: {
            origin: `${process.env.FRONTEND_URL}:5173`,
            credentials: true
        }
    })

    console.log("Socket.io initialized successfully!")

    io.on("connect", (socket)=>{
        console.log("User connected successfully: ", socket.id)
    })

}

export function getIO(){
    if(!io){
        throw new Error("Socket.io not initialized!")
    }
    return io
}

