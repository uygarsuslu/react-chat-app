import { useState } from 'react'

import styles from "./styles.module.css";
import { sendMessage } from "../socketApi";
import { useChat } from "../context/ChatContext";

function ChatForm() {

    // input'a bir şey girildiği anda girilen ifade state yazılmalı //
    const [message, setMessage] = useState("");

    // mesajların listelenmesi //
    const { setMessages } = useChat();

    // form'a bir değer girince sayfanın yenilenmesini engeller //
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);

        // önceki mesajlarla birlikte yeni eklenen mesajların gösterilmesi //
        setMessages((prevState) => [...prevState, { message, fromMe: true }]);

        // mesajın iletilmesi //
        sendMessage(message);

        // form gönderildiği anda içini temizler //
        setMessage("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles.textInput}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </form>
        </div>
    )
}

export default ChatForm