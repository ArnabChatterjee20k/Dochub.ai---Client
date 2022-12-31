import Paper from "@mui/material/Paper";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
export default function ChatBox() {
  return (
    <Paper
      component="form"
      elevation={1}
      sx={{
        width: {xs:"100%",sm:"90%"},
        maxWidth: "1280px",
        padding: "10px",
        marginBottom:{
            xs:8,
            sm:0
        },

        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
        flex:1
      }}
    >
      <TextField multiline  placeholder="Ask DocHub...." sx={{ width: "100%",resize:"vertical" }} />
      <IconButton>
        <SendIcon color="primary" />
      </IconButton>
    </Paper>
  );
}
