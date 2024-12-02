import React, { ReactNode } from 'react'

interface ButtonProps {
    children? : ReactNode;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "submit" | "reset" | "button";
    variant?: 'primary' | 'secondary';
}
const Button:React.FC<ButtonProps> = ({children, className , onClick , type , variant}) => {
  if (variant === 'primary' || !variant) {
    return <button className={`bg-background hover:bg-foreground hover:text-white text-black flex justify-center items-center rounded-sm transition-all duration-300 ${className}`} onClick={onClick} type={type}>{children}</button>;
  }
  else if(variant === 'secondary') {
    return <button className={`bg-foreground hover:bg-background hover:text-black text-white flex justify-center items-center rounded-sm transition-all duration-300 ${className}`} onClick={onClick} type={type}>{children}</button>;
  }
}

export default Button