import React from 'react';
import Layout from '../components/Layout';


import { DatePicker } from 'antd';

import { useAppContext } from './AppContext';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/layout/Dashboard';

import Expense from '../components/Expense';
import Income from '../components/Income';

const { RangePicker } = DatePicker;

const HomePage = () => {
 
    const {
      menu, setMenu,
      activeButton, setActiveButton
    } = useAppContext();

 
 

  return (<> 
  <div className="flex flex-col ">
    <div className="">
    <Header/>
      </div> 
   
   <div className="flex justify-start w-full bg-[#9191d2]/[.5] ">
   <div className='sm:w-[25%] '>
   <Sidebar /> 
    
   </div>
   <div className='  content w-full border-2 border-inherit rounded-lg m-2 '>
   
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
