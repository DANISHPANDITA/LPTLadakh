import React from "react";

function CardSmall({ img, header, text }) {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-xl">
      <img class="w-full rounded-lg" src={img} alt="Pic" />
      <div class="px-6 py-4">
        <div class="font-bold text-center text-xl mb-2">{header}</div>
        <p class="text-gray-700 text-base text-justify font-semibold">{text}</p>
      </div>
    </div>
  );
}

export default CardSmall;
