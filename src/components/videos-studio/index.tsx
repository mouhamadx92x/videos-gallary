import { Box, ImageListItem, ImageList } from "@mui/material";
import { useState } from "react";
import BasicModal from "./display-video-modal";
import { studioVideosData } from "../../assets";
import Video from "./display-video-modal/video";
import { imgListItemStyle, mainImgListStyle, imgListStyle } from "./style";

export default function StandardImageList() {
    const [open, setOpen] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>("");

    const handleOpen = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const targetElement = event.target as HTMLElement;
        const firstChild = targetElement.firstChild as HTMLElement;
        setVideoId(firstChild.id);
        setOpen(true);
    };

    return (
        <Box sx={mainImgListStyle}>
            <ImageList cols={3} rowHeight={231} sx={imgListStyle}>
                {studioVideosData.map(({ id, videoPath }) => (
                    <ImageListItem
                        onClick={(event) => handleOpen(event)}
                        sx={imgListItemStyle}
                        key={id}
                    >
                        <Video
                            width={"200px"}
                            height={"200px"}
                            objectFit={"cover"}
                            id={id}
                            videoPath={videoPath}
                            open={open}
                        />
                    </ImageListItem>
                ))}
                <BasicModal videoId={videoId} open={open} setOpen={setOpen} />
            </ImageList>
        </Box>
    );
}
