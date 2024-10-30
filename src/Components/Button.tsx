import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?:string,
  children:ReactNode,
  width?:"w-full"|"w-fit"
}

function Button({classname,children,width, ...rest}: IProps) {
  return <>
  <button className={`${classname} ${width} h-12 mt-2 text-white font-medium rounded-md px-2`} {...rest}>{children}</button>
  </>;
}

export default Button;
