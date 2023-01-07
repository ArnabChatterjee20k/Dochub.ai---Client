import TextField  from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useSocketContext } from "../context/SocketContextProvider";
import {useFileContext} from "../context/FileContextProvider"

export default function FileNameBar() {
    const {socket} = useSocketContext()
    const [border,setBorder] = useState(false)
    const {filename,setFilename} = useFileContext()
    
    const handleChange = (e)=>{
      const val = e.target.value
      socket.emit("send-filename",val)
      setFilename(val)
      socket.off("send-filename")
    }

    useEffect(()=>{
      if(!socket) return;
      socket.on("receive-filename",(data)=>setFilename(data))
    },[socket,filename])

  return <TextField value={filename} onChange={handleChange} variant="outlined" sx={{"& .MuiInputBase-input":{padding:0},"& fieldset":{border:border?"2px solid":"none"}}} onFocus={()=>setBorder(true)} onBlur={()=>setBorder(false)}/>;
}