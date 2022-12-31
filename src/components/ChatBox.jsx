import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { useChatContext } from "../context/ChatContextProvider";
import generateUniqueId from "../utils/generateUniqueId";
import { useState } from "react";

export default function ChatBox() {
  const { chat, setChat } = useChatContext();
  const [prompt, setPrompt] = useState("");
  function addUserChat(e) {
    e.preventDefault();
    setPrompt("");
    setChat((prev) => {
      return {
        ...prev,
        [generateUniqueId()]: { user: prompt, bot: "" },
      };
    });
  }
  return (
    <Paper
      component="form"
      onSubmit={addUserChat}
      elevation={1}
      sx={{
        width: { xs: "100%", sm: "90%" },
        maxWidth: "1280px",
        padding: "10px",
        marginBottom: {
          xs: 8,
          sm: 0,
        },

        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
        flex: 1,
      }}
    >
      <TextField
        multiline
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask DocHub...."
        sx={{ width: "100%", resize: "vertical" }}
      />
      <IconButton type="submit">
        <SendIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
