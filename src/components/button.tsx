import React from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};

export const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      {props.text}
    </button>
  );
};
