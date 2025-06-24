import React from 'react';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
     <Home/>
    <ToastContainer autoClose={400} />
    </>
   
  )
}

export default App;
