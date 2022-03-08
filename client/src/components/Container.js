import { useEffect } from 'react'

import ChatList from './ChatList'
import ChatForm from './ChatForm'
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi";
import { useChat } from "../context/ChatContext";

function Container() {

    const { setMessages } = useChat();

    // backend bağlantısı //
    useEffect(() => {
        init();

        // sayfa yenilendiğinde mesajların silinmemesini sağlar //
        subscribeInitialMessages((messages) => setMessages(messages));

        // mesajların dinlenmesi //
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message }])
        });

    }, [])

    return (
        <div className='App' >
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container;