import React from "react";

export default function WhiteArrows() {
  return (
    <div className="cursor-pointer w-fit p-2.5 flex items-center justify-center rounded-lg border border-300 bg-gradientWhite text-950">
      <svg
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L8 8.5M8 8.5V1M8 8.5H1" stroke="#292929" />
      </svg>
    </div>
  );
}
