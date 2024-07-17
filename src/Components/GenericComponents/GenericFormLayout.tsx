import { Container, CssBaseline, Box, Avatar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import wonderbizlogo from "../../Resources/Assets/logo.jpg";

function GenericFormLayout({ Title, children }: any) {
  const [path, setpath] = useState("");

  useEffect(() => {
    setpath(window.location.pathname.substring(0, 11));
  }, []);
  return (
    <div>
      <Container component="main" maxWidth={path === "/register" ? "sm" : "xs"}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            src={wonderbizlogo}
            sx={{ m: 1, bgcolor: "secondary.main", width: 200, height: 200 }}
          />
          <Typography component="h1" variant="h5">
            {Title}
          </Typography>
          {children}
        </Box>
      </Container>
    </div>
  );
}

export default GenericFormLayout;
