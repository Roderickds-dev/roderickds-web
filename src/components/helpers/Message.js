"use client";
import React from "react";

export const Message = ({ msj }) => {
  return (
    <div>
      <i className="bi bi-exclamation-circle text-red-500 flex gap-2 items-center text-xl">
        <p className="text-center text-red-500 font-barlow text-xl font-medium">
          {msj}
        </p>
      </i>
    </div>
  );
};
