import React from "react";

interface NavLinkProps {
  id: string;
  text: string;
}

const NavLink: React.FC<NavLinkProps> = ({ id, text }) => {
  return (
    <li>
      <a href={id}>{text}</a>
    </li>
  );
};

export default NavLink;
