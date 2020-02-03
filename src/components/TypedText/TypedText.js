import React, { useState, useEffect } from "react";
import "./TypedText.css";

export const TypedText = ({ initialText, finalText, onFinish }) => {
  const [playState, setPlayState] = useState("REST_START");
  const [text, setText] = useState(initialText);

  const PLAY_STATE = {
    DELETE: { val: "DELETE", duration: 80 },
    TYPE: { val: "TYPE", duration: 100 },
    REST_START: { val: "REST_START", duration: 1000 },
    REST_END: { val: "REST_END", duration: 500 }
  };

  useEffect(() => {
    setTimeout(() => {
      switch (playState) {
        case "REST_START":
          setPlayState("DELETE");
          break;
        case "REST_END":
          setPlayState("TYPE");
          break;
        case "DELETE":
          if (text !== "") {
            let newText = text
              .split("")
              .slice(0, -1)
              .join("");
            setText(newText);
          } else {
            setPlayState("REST_END");
          }
          break;
        case "TYPE":
          if (text !== finalText) {
            let newText = finalText
              .split("")
              .slice(0, text.length + 1)
              .join("");
            setText(newText);
          }
          break;
        default:
        // do nothing
      }
    }, PLAY_STATE[playState].duration);
  }, [text, playState, PLAY_STATE, finalText]);

  return (
    <span className="typedtext">
      {text}
      <span className="typedtext-cursor">|</span>
    </span>
  );
};
