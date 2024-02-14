"use client";

import React from "react";
import { useState } from "react";
import CountButton from "./ui/countButton";
import TextArea from "./ui/textbox";
import { countUSD } from "./utils/GetMoney";

export default function Home() {
  const [text, setText] = useState("");
  const [cash, setCash] = useState("0.00");

  const updateTextState = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };



  const countThatMoney = () => {
    // Your code here
    setCash(countUSD(text));
  };

  return (
    <main>
      <div>
        <div className="p-10 text-3xl bg-blue-300">
          <h1 className="text-center ">This is my sample text</h1>
        </div>

        <div className="flex">
          <div className="flex-1 pt-10">
            <div className="flex items-centered justify-center">
              <TextArea txt={text} handleTextChange={updateTextState} />
            </div>
            {/*  place in a flex box of fixed size 1px*/}
          </div>
          <div className="flex justify-center items-center">
            <div>
              <CountButton onClick={countThatMoney} />
            </div>
          </div>

          {/* Could potentially make into another component... */}
          <div className="flex-1 pt-10">
            <h1 className="text-center">Total cash counted:</h1>
            <h2 className="text-center">${cash}</h2>
          </div>
        </div>

        {/* <div className="flex-1 bg-black h-px"></div>
        <div className="p-7">
          <h1 className="text-center">
            This is the bottom of the page
          </h1>
        </div> */}
      </div>
    </main>
  );
}
