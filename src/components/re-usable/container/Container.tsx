import React from 'react'

interface ContainerProps {
    className?: string;
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({children, className}) => {
  return (
    <div className={`lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-[1669px] mx-auto px-2 sm:px-4 md:px-6 ${className}`}>{children}</div>
  )
}

export default Container