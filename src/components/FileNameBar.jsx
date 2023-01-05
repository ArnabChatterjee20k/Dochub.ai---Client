import { useFileContext } from "../context/FileContextProvider";
import Typography from "@mui/material/Typography";
import TextField  from "@mui/material/TextField";
import { useState } from "react";
export default function FileNameBar() {
    const [border,setBorder] = useState(false)
  const { filename } = useFileContext();
  return <TextField value={filename} variant="outlined" sx={{"& .MuiInputBase-input":{padding:0},"& fieldset":{border:border?"2px solid":"none"}}} onFocus={()=>setBorder(true)} onBlur={()=>setBorder(false)}/>;
}
