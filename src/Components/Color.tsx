import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  bgColor:string
}

function CircleColor({bgColor , ...rest}: IProps) {
  return (
    <>
      <span className={`block h-6 w-6 rounded-full cursor-pointer mb-1`} style={{ backgroundColor:bgColor}}  {...rest}/>
    </>
  );
}

export default CircleColor;
