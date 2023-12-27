import React from "react";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
};

export const Button = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="rounded border border-gray-200 px-4 py-2 font-bold text-white hover:bg-neutral-950"
    >
      {props.text}
    </button>
  );
};
