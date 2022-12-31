import Box from "@mui/material/Box";
import styled from "@emotion/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Loader from "./Loader";

const ChatSpriteWrapper = styled(Box)({
  padding: "15px",
  width: "100%",
  borderRadius: "5px",
  display: "flex",
  gap: 4,
});

export function AiChatSprite({ chat }) {
  return (
    <ChatSpriteWrapper sx={{ backgroundColor: "#e0f7fa47" }}>
      {chat.trim().length === 0 ? <Loader /> : chat}
    </ChatSpriteWrapper>
  );
}

export function HumanChatSprite({ chat }) {
  return (
    <ChatSpriteWrapper fontWeight="bold" sx={{ backgroundColor: "#dcfff7" }}>
      <AccountCircleIcon
        sx={{ alignSelf: "flex-start", fontSize: "1.5rem", color: "#008a00" }}
      />
      {chat}
    </ChatSpriteWrapper>
  );
}
