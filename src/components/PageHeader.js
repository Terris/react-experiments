import React, { useContext } from 'react';
import { PageTitleContext } from '../context';

export const PageHeader = () => {
  const { pageTitle } = useContext(PageTitleContext);
  return (
    <header className="page-header">
      <h2>{pageTitle}</h2>
    </header>
  )
}
