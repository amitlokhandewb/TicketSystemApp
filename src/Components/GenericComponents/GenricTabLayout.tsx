import React from "react";
import MiniDrawer from "../HomePageComponents/MiniDrawer";
import { Box, Container } from "@mui/material";

function GenricTabLayout({ children, title }: any) {
  return (
    <div>
      <MiniDrawer title={title} children={children} />
      <Container style={{  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Footer</Container>
    </div>
  );
}

export default GenricTabLayout;
