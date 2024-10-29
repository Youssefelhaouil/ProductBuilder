import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  classname?:string,
  children:ReactNode,
  width?:"w-full"|"w-fit"
}

function Button({classname,children,width, ...rest}: IProps) {
  return <>
  <button className={`${classname} ${width} h-10 mt-2 text-white font-medium rounded-md`} {...rest}>{children}</button>
  </>;
}

export default Button;
