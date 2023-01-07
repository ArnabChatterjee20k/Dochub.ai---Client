import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DrawerNav from "./components/DrawerNav";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { TextEditor } from "./components/TextEditor";
import MobileNav from "./components/MobileNav";
import Chat from "./Pages/Chat";
import { ChatContextProvider } from "./context/ChatContextProvider";
import SocketContextProvider from "./context/SocketContextProvider";
import { FileContextProvider } from "./context/FileContextProvider";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ display: "flex", marginTop: "4rem" }}>
        <CssBaseline />
        <DrawerNav />
        <SocketContextProvider>
          <FileContextProvider>
            <ChatContextProvider>
              <Routes>
                <Route
                  path="/editor"
                  element={<Navigate to={`/document/${uuidv4()}`} />}
                />
                <Route path="/" element={<Chat />} />
                <Route path="/document/:id" element={<TextEditor />} />
              </Routes>
            </ChatContextProvider>
          </FileContextProvider>
        </SocketContextProvider>
      </Box>
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
