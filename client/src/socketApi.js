// backend bağlantısı //
import io from "socket.io-client";

let socket;

export const init = () => {
    console.log("Connecting...");
    socket = io("http://localhost:3000", {
        transports: ["websocket"],
    });

    socket.on("connect", () => console.log("Connected!"))
}

// mesajın iletilmesi // // backend'deki index.js dosyasına göre yapıyoruz //
export const sendMessage = (message) => {
    if (socket) socket.emit("new-message", message)
}

// mesajların dinlenmesi // // backend'deki index.js dosyasına göre yapıyoruz //    
export const subscribeChat = (cb) => {
    if (!socket) return;

    socket.on("receive-message", (message) => {
        console.log("There is a new message", message);
        cb(message)
    })
}

// sayfa yenilendiğinde mesajların silinmemesini sağlar // // backend'deki index.js dosyasına göre yapıyoruz // 
export const subscribeInitialMessages = (cb) => {
    if (!socket) return;

    socket.on("message-list", (messages) => {
        console.log("Initial", messages);
        cb(messages)
    })
}