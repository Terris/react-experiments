import React, { useContext, useEffect } from 'react';
import { PageTitleContext } from '../context';

export const Home = () => {
  const { providePageTitle } = useContext(PageTitleContext);
  
  useEffect(() => {
    providePageTitle("Home")
  })
  
  return (
    <p>Lorem ipsum</p>
  )
}
