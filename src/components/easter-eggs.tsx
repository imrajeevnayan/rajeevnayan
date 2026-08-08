"use client";
import React, { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  useEffect(() => {
    if (typeof console !== "undefined") {
      console.log(
        "%cWhoa, look at you! 🕵️‍♂️\n" +
          "You seem to have discovered the developer console! 🔍\n" +
          "Want to see some magic? ✨\n" +
          "Just type %crajeev%c and hit enter! 🎩🐇",
        "color: #FFD700; font-size: 14px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #00FF00; font-size: 14px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #FFD700; font-size: 14px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
      );

      ["rajeev", "Rajeev", "RAJEEV"].forEach((name) => {
        if (name in window) return;
        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c✨ Abra Kadabra! ✨\n\n" +
                "You just summoned the magic of Rajeev! 🧙‍♂️\n" +
                "With great power comes great responsibility! 💻⚡",
              "color: #FF4500; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px"
            );

            const timer = setTimeout(() => {
              console.log(
                "%cPssttt! 🤫\n\n" +
                  "Do you like cats?? 😺 If yes, then press 'n' on viewport and see what happens! 🐱✨",
                "color: #FF69B4; font-size: 14px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
              );
              clearTimeout(timer);
            }, 3000);
            return "";
          },
        });
      });
    }
  }, []);

  return (
    <>
      <NyanCat />
    </>
  );
};

export default EasterEggs;
