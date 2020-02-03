import React, { useEffect, useContext } from "react";
import { PageTitleContext } from "../context";
import { TypedText } from "../components/TypedText";

export const TypedTextPage = () => {
  const { providePageTitle } = useContext(PageTitleContext);

  useEffect(() => {
    providePageTitle("Animation: Typed Text");
  });

  return (
    <TypedText
      initialText="This will be deleted."
      finalText="And this will be typed."
    />
  );
};
