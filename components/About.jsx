import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Fab, Typography } from "@mui/material";

const About = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ m: 1, position: "relative" }}>
          <Fab onClick={handleClickOpen}>
            <InfoIcon />
          </Fab>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">About</DialogTitle>
        <DialogContent>
          <Box sx={{ marginTop: 2, minWidth: "30rem" }}>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Created by:{" "}
              <span style={{ fontWeight: "normal" }}>Hornei Vlad</span>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Coordinated by:{" "}
              <span style={{ fontWeight: "normal" }}>
                Prof. Dr. Ing. Giurgiu Mircea
              </span>
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              About the project
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              tenetur fugit provident molestias aliquam quidem delectus eligendi
              id voluptates accusantium, omnis necessitatibus quasi explicabo
              dolorum minima neque vel consequuntur. Eum in ut harum expedita,
              nesciunt, accusantium iure eligendi voluptatem quo eius labore
              vero illum. Ex numquam fugit nam nulla? Dolorem, eum harum
              consectetur id ea voluptas tempora voluptate natus molestiae,
              dolorum incidunt ex sed asperiores eos eveniet voluptates, non
              dolore. Non, commodi consequatur magnam adipisci temporibus sunt
              eos aspernatur aperiam quod in cupiditate totam nulla hic? Eum
              suscipit dignissimos fugiat ipsa numquam quaerat nihil quae fuga
              perspiciatis doloribus? Amet, doloremque!
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
                marginTop: "2rem",
                flexDirection: "row",
              }}
            >
              <img
                style={{ width: "10rem", margin: "0 1rem" }}
                src="https://www.utcluj.ro/static/images/logo_site.png"
                alt=""
              />
            </div>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;
