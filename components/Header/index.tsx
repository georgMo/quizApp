import React from "react";
import { HeaderContainer } from "./styles";
interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return <HeaderContainer> {title} </HeaderContainer>;
};

export default Header;
