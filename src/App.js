import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/NavBar/Layout';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './component/NavBar/NavBar'

function App() {


  return (
    <BrowserRouter>
      <div className="select-none bg-main-bg h-screen
                      bg-center bg-fixed bg-auto bg-no-repeat overflow-x-hidden
                      lg:bg-fixed lg:bg-repeat">

        {/* Navigate to top */}
        <div className='p-0 m-0' id='home'/> 

        <NavBar/>
        <Layout/> 
            
      </div>
    </BrowserRouter>
  );
}

export default App;
