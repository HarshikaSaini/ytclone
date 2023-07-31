import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import {  Videos } from "./index.js";
import { useParams } from "react-router-dom";
import { fetchfromApi } from "../utils/fetchfromApi.js";
const SearchDetail = () => {

    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();

    useEffect(() => {
        fetchfromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data)=> setVideos(data.items))
    }, [searchTerm])

    return (
        <Box  p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 , ml:{ xs: 1 , md:20} }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
           SEARCH RESULTS OF : <span style={{ color: "red" }}>{searchTerm}</span> VIDEOS
        </Typography>

        <Videos videos={videos} />
    </Box>
       
    );
}

export default SearchDetail;