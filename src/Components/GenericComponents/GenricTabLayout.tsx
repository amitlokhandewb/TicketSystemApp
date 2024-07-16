import React from "react";
import MiniDrawer from "../HomePageComponents/MiniDrawer";

function GenricTabLayout({ children }: any) {
  return (
    <div>
      <MiniDrawer children={children} />
    </div>
  );
}

export default GenricTabLayout;
