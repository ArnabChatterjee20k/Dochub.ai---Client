import { createContext, useState , useContext , useEffect } from "react";
import { io } from "socket.io-client";
import { server } from "../data/Constants";

const SocketContext = createContext();

export const useSocketContext = ()=> useContext(SocketContext);

export default function SocketContextProvider({ children }) {

  const [socket, setSocket] = useState();
  useEffect(() => {
    const sio = io(server);
    setSocket(sio);
    return () => {
      sio.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{socket,setSocket}}>{children}</SocketContext.Provider>;
}
