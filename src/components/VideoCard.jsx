import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {  demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"


const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    return (
        <Card sx={{ width: { xs:"100%" , sm:"358px" , md:"320px" }, boxShadow: "none", borderRadius: "0px"}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ width: {
                        xs:"100%" , 
                        sm:"358px" ,
                        md:"320px"
                    }, height: 180}}
                />
                <CardContent sx={{ backgroundColor: "#fff", height: "80px" }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#303030">
                            {snippet?.title?.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                        </Typography>
                    </Link>

                    <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold" color="grey">
                            {snippet?.channelTitle || demoChannelTitle}
                            <CheckCircle sx={{ fontSize: 12, color: "grey", ml: "5px" }} />
                        </Typography>
                    </Link>

                </CardContent>

            </Link>
        </Card>
    )
}
export default VideoCard