import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ROUTES } from '../constants';
import { PageTitleContext } from '../context';
import { Home, About } from '../routes';
import { Header } from './Header';
import { PageHeader } from './PageHeader';

function App() {
  const [pageTitle, setPageTitle] = useState();
  const providePageTitle = (title) => setPageTitle(title);
  
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="main">
          <PageTitleContext.Provider value={{ pageTitle, providePageTitle}}>
            <PageHeader />
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.ABOUT} component={About} />
          </PageTitleContext.Provider>
        </main>
      </div>
    </Router>
  );
}

export default App;
