import React from "react";

interface GoToProps {
  id: string;
  text: string;
}

const GoTo: React.FC<GoToProps> = ({ id, text }) => {
  return (
    <li>
      <a href={id}>{text}</a>
    </li>
  );
};

export default GoTo;
