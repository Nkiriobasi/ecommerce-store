"use client"

import Link from "next/link"

interface CustomLinkPropsType {
    href: string
    className?: string
    children: React.ReactNode
}

const CustomLink: React.FC<CustomLinkPropsType> = ({
    href, 
    className, 
    children 
}) => {
  return (
    <Link href={href} className={className ? className : ''}>
        {children}
    </Link>
  )
}

export default CustomLink