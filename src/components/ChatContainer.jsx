import React from 'react'
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { AiChatSprite , HumanChatSprite} from './ChatSprite';

export default function ChatContainer() {
  return (
    <Stack sx={{height:"100%",width:"100%",alignItems:"center",gap:2,overflowY:"scroll",'&::-webkit-scrollbar':{
        width:0,
    }}}>
        <Box>
            <HumanChatSprite/>
            <AiChatSprite/>
        </Box>
        <Box>
            <HumanChatSprite/>
            <AiChatSprite/>
        </Box>
        <Box>
            <HumanChatSprite/>
            <AiChatSprite/>
        </Box>
    </Stack>
  )
}
