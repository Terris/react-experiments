import React, { useContext, useEffect } from "react";
import { PageTitleContext } from "../context";

export const About = () => {
  const { providePageTitle } = useContext(PageTitleContext);

  useEffect(() => {
    providePageTitle("About");
  });

  return <p>Lorem ipsum</p>;
};
