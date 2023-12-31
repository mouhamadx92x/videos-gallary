import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { studioVideosData } from "../../../assets";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "none",
    // bgcolor: "background.paper",
    // boxShadow: 24,
    // p: 4,
};
interface BasicModalProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    open: boolean;
    videoLink: string;
}

const BasicModal: React.FC<BasicModalProps> = ({
    setOpen,
    open,
    videoLink,
}) => {
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {videoLink &&
                    studioVideosData.map((item) => {
                        if (item.title === videoLink) {
                            return (
                                <video
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        transition: "transform 1s",
                                        objectFit: "fill",
                                    }}
                                    loop
                                    muted={open ? false : true}
                                    autoPlay
                                >
                                    <source
                                        id={item.title}
                                        src={`${item.video}`}
                                        type="video/mp4"
                                    />
                                </video>
                            );
                        }
                    })}
            </Box>
        </Modal>
    );
};
export default BasicModal;
