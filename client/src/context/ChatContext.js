// bu context altında yapacağımız iş: mesajları listeleyecek ve o mesajları manipüle edecek fonksiyonu altta kalan diğer componentlere geçmek //

import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

    const [messages, setMessages] = useState([])

    const values = {
        messages,
        setMessages,
    }

    return <ChatContext.Provider value={values}>
        {children}
    </ChatContext.Provider>
}

// tek tek context'i import edip tek tek kullanmaktansa böyle yaparız //
export const useChat = () => useContext(ChatContext);