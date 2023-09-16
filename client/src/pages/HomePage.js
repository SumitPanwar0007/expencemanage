import React from 'react';
import Layout from '../components/Layout';


import { useAppContext } from './AppContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/layout/Dashboard';

import Expense from '../components/Expense';
import Income from '../components/Income';




const HomePage = () => {
 
    const {
     
      activeButton,
    } = useAppContext();

 
 

  return (<> 
  <div className="  flex flex-col bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 backdrop-blur-xl overflow-hidden">

    <div className="fixed overflow-y-auto z-50 top-0 left-0 w-full">
    <Header/>
      </div> 
   
   <div className="sm:flex justify-start w-full ">
   <div className='w-[20%] z-10 '>
   <Sidebar /> 
    
   </div>
   <div className='content border-2 border-inherit rounded-lg m-2 w-full'>
   
        {activeButton === 'Dashboard' && <Dashboard />}
        {activeButton === 'Layout' && <Layout />}
        {activeButton === 'Income' && <Income />}
        {activeButton === 'Expense' && <Expense />}
        {/* {activeButton === 'Chart' && <Chart />} */}
        {/* {activeButton === 'Transaction' && <Transaction />} */}
  
     
   </div>
    </div>

    <Footer/>
    </div>
    </>
 
  );
};

export default HomePage;
