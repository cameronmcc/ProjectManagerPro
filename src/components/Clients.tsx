import { Box, Typography } from "@mui/material";

const clients = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          paddingTop: "20px",
        }}
      >
        <Typography>Clients</Typography>
      </Box>
    </>
  );
};

export default clients;
