import { useState } from 'react'
import './App.css'
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/globalStyle";
import JinseoPage from './pages/jinseo/jinseo';
import YoobinPage from './pages/yoobin/yoobin';

function App() {
  return (
    <>
      <Global styles={globalStyle()} />
      <JinseoPage />
      {/* <YoobinPage /> */}
    </>
  )
}

export default App
