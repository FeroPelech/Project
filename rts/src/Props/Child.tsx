import React from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = (props: ChildProps) => {
  return (
    <div>
      {props.color}
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Child;
