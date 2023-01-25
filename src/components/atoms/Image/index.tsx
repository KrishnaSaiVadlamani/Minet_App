import React from "react";

interface ImageComponentProps {
  src: string;
  height: string;
  width: string;
}

export const ImageComponent = (props: ImageComponentProps) => {
  return <img src={props.src} width={props.width} height={props.height}></img>;
};
