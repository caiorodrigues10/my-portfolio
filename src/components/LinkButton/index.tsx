import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

interface LinkProps {
  children: ReactNode;
  href: string;
}

export default function Button({ children }: LinkProps): ReactElement {
  return <Button href="#text-buttons">{children}</Button>;
}
