import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { Navbar,ChannelDetail,VideoDetail,SearchDetail,Feed } from "./components";
const App = () => (
    <BrowserRouter>
        <Box sx={{ backgroundColor: "black" }}>
            <Navbar />

            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" exact element={<VideoDetail />} />
                <Route path="/channel/:id" exact element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" exact element={<SearchDetail />} />
            </Routes>
        </Box>
    </BrowserRouter>
)
export default App