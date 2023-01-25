import { Typography,TypographyProps } from "@mui/material";
import React from "react";

interface TypographyComponentPros extends TypographyProps {
  children?: string;
}

export const TypographyComponent = (props: TypographyComponentPros) => {
  return (
    <Typography variant={props.variant} {...props}>
      {props.children}
    </Typography>
  );
};
