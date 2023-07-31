import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./"
import { fetchfromApi } from "../utils/fetchfromApi.js";


const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchfromApi(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]));

    fetchfromApi(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items));
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
         <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{mr:{sm:"100px" ,md:"210px"}}} />
        <Videos  videos={videos}/>
      </Box>
     
    </Box>
  )
}


export default ChannelDetail;