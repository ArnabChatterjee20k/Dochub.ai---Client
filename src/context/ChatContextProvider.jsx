import { useState, createContext, useContext } from "react";

const ChatContext = createContext();
export const useChatContext = () => useContext(ChatContext);

export function ChatContextProvider({ children }) {
  //   structure of our data. Using id we can grab the data
  //     {
  //     id:{
  //         user:"",
  //         bot:""
  //     }
  //   }
  const [chat, setChat] = useState({
    "1672481661487-0.a84d63e32b91e": {
      user: "what is my name",
      bot: "your name",
    },
    "1672481661494-0.dd5d314d4b2fe": {
      user: "",
      bot: "",
    },
    "1672481661495-0.c9749578c9fad": {
      user: "",
      bot: "",
    },
  });

  return (
    <ChatContext.Provider value={{ chat, setChat }}>
      {children}
    </ChatContext.Provider>
  );
}
