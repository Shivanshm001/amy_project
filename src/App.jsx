import React from 'react';
import { HOME, NOT_FOUND, ROOT, ABOUT_US, FAQ_PAGE, SERVICES } from 'config/urlPaths';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'components/NotFound/NotFound';
import { Layout } from 'components/Layout/Layout';
import { Home } from 'components/Home/Home';
import { FAQ } from 'components/FAQ/FAQ';
import { Services } from 'components/Services/Services';

export function App() {
  return (
    <>
      <Routes>
        <Route path={ROOT} element={<Layout />}>
          <Route path={HOME} element={<Home />} />
          <Route path={SERVICES} element={<Services />} />
          <Route path={NOT_FOUND} element={<NotFound />} />
          <Route path={FAQ_PAGE} element={<FAQ />} />
        </Route>
      </Routes>
    </>
  );
}