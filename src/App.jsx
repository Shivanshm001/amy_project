import React from 'react'
import { HOME,NOT_FOUND } from 'config/urlPaths'
import {Routes, Route} from 'react-router-dom';


export function App() {
  return (
    <>
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </>
  )
}