/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import Divisi from './components/Divisi';
import React, { useEffect } from 'react';
import Footer from './components/Footer';
import Dummy from './components/Dummy';

function Example() {
  useEffect(() => {
    document.title = 'HIMATIF - UMG';
  }, []);
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      {Example()}
        <Nav />
        <Header />
        <About />
        <Divisi />
        <Footer />
      </div>
    </>
  )
}

export default App
