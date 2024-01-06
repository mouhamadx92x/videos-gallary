export const mainModalBoxStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "none",
    "&:focus": {
        outline: "none",
    },
    "@media screen and (max-width: 480px)": {
        width: "300px",
        height: "200px",
    },
};

export const InstagramStyles = {
    fontSize: 60,
    marginLeft: 1,
    margin: "0 auto",
};

export const linkToInstagramStyles = {
    width: "100%",
    position: "absolute",
    bottom: "0%",
    right: "0%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
    display: "flex",
};

export const imgListItemStyles = {
    ":hover": {
        transform: "scale(1.5)",
        zIndex: "10000",
        transition: "transform 0.7s",
    },
    margin: "10px",
};

export const imgListMainBoxStyles = {
    width: "100%",
    height: "1800px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
        height: "2700px",
    },
    "@media screen and (max-width: 480px)": {
        height: "5000px",
    },
};
export const imgListStyles = {
    width: "750px",
    padding: "60px",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    "@media screen and (min-width: 481px) and (max-width: 767px)": {
        width: "500px",
        height: "2500px",
        paddingLeft: "25px",
        paddingRight: "25px",
    },
    "@media screen and (max-width: 480px)": {
        width: "300px",
        height: "5000px",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
};