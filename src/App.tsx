import { useState } from 'react'
import './App.css'
import Badge from '@/components/jinseo/Badge'
import { Global } from "@emotion/react";
import { globalStyle } from "@/styles/globalStyle";

function App() {
  return (
    <>
      <Global styles={globalStyle()} />
      <Badge />
    </>
  )
}

export default App
