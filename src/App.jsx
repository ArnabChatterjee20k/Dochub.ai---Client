import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DrawerNav from "./components/DrawerNav";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { TextEditor } from "./pages/TextEditor";
import MobileNav from "./components/MobileNav";
import Chat from "./Pages/Chat";
import { ChatContextProvider } from "./context/ChatContextProvider";
import SocketContextProvider from "./context/SocketContextProvider";
import { FileContextProvider } from "./context/FileContextProvider";
import ImageSearch from "./Pages/ImageSearch";
import DialogContextProvider from "./context/DialogContextProvider";
import AddBlogForm from "./components/AddBlogForm";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ display: "flex", marginTop: "4rem" }}>
        <CssBaseline />
        <DrawerNav />
        <DialogContextProvider>
          <SocketContextProvider>
            <FileContextProvider>
              <ChatContextProvider>
                <AddBlogForm/>
                <Routes>
                  <Route
                    path="/editor"
                    element={<Navigate to={`/document/${uuidv4()}`} />}
                  />
                  <Route path="/" element={<Chat />} />
                  <Route path="/document/:id" element={<TextEditor />} />
                  <Route path="/images" element={<ImageSearch />} />
                </Routes>
              </ChatContextProvider>
            </FileContextProvider>
          </SocketContextProvider>
        </DialogContextProvider>
      </Box>
      <MobileNav />
    </BrowserRouter>
  );
}

export default App;
