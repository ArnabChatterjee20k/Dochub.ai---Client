import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import DrawerNav from "./components/DrawerNav";
import Navbar from "./components/Navbar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { TextEditor } from "./TextEditor";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import MobileNav from "./components/MobileNav";

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        <Box sx={{ display: "flex", marginTop: "4rem" }}>
          <CssBaseline />
          <DrawerNav />
          <Routes>
            {/* <Route path="/" element={<Navigate to={`/document/${uuidv4()}`}/>}/> */}
            <Route path="/" />
            <Route path="/document/:id" element={<TextEditor />} />
          </Routes>
        </Box>
        <MobileNav/>
      </BrowserRouter>
  );
}

export default App;
