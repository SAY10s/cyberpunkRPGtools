import React from "react";
import { toLowercaseRemovePolishAndReplaceSpaces } from "../utils/utils.ts";

interface NavLinkProps {
  name: string;
}

const NavLink: React.FC<NavLinkProps> = ({ name }) => {
  const linkId = toLowercaseRemovePolishAndReplaceSpaces(name);

  return (
    <li>
      <a href={`#${linkId}`}>{name}</a>
    </li>
  );
};

export default NavLink;
