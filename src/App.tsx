import { useState } from 'react'
import './App.css'
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/globalStyle";
import JinseoPage from './pages/jinseo/jinseo';

function App() {
  return (
    <>
      <Global styles={globalStyle()} />
      <JinseoPage />
    </>
  )
}

export default App
