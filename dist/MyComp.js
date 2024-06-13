// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com 
"use client";

import React from "react";
import { useEffect } from "react";
const MyComp = () => {
  useEffect(() => {
    const init = async () => {
      const {
        Ripple,
        initTE
      } = await import("tw-elements");
      initTE({
        Ripple
      });
    };
    init();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
  }, "Card title"), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-base text-neutral-600 dark:text-neutral-200"
  }, "Some quick example text to build on the card title and make up the bulk of the card's content."), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
    "data-te-ripple-init": true,
    "data-te-ripple-color": "light"
  }, "Button"));
};
export default MyComp;