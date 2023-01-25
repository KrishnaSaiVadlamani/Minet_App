import { TypographyProps } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";
import React from "react";
import { TypographyComponent } from "../Typography";

interface ButtonComponentProps extends ButtonProps {
  label: string;
  textVariant?: TypographyProps["variant"];
  textColor?: string;
}

export const ButtonComponent = (props: ButtonComponentProps) => {
  return (
  <div>
    <Button type="button" {...props}>
        <TypographyComponent children={props.label} variant={props.textVariant} color={props.textColor}/>
    </Button>
  </div>
  )
};
