
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAppContext} from '../pages/AppContext'
import { message } from 'antd'
import home from '../images/home-2.svg'
import Dashboard from '../images/dashboard-2.svg'
import wallet from '../images/wallet-2.svg';
import logout from '../images/logout-2.svg';
import list from '../images/transection-2.svg';
import chart from '../images/chart-2.svg'


const Sidebar = () => {
  const navigate=useNavigate();
  const { 
    
       setViewData,
      setFrequency,
        loginUser, setLoginUser,
        dashboard,setDashboard,
         setActiveButton,
        menu, 
        

  } = useAppContext();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    message.success("Logout Successfully");
    navigate('/login');
  };
const handleDashboard=()=>{
  setDashboard(!dashboard);
  setFrequency('7')
  // setSelectDate('7')

}
const handleTransection=()=>{
  setActiveButton('Layout')
  setViewData('table') 
 setFrequency('7')
} 
const handleChart=()=>{
  setActiveButton('Layout')
  setFrequency('7');
  setViewData('analytics')
}


const handleButtonClick = (buttonName) => { 
  setActiveButton(buttonName);
};


  return (
    <div  className={menu ? 'my-0  px-2 fixed bg-gradient-to-r from-blue-800 to-indigo-500 text-white  flex flex-col justify-center gap-4  transition duration-100 z-10'
                          :' bg-gradient-to-r from-blue-800 to-indigo-500 text-white px-2 text-center rounded-lg mx-auto py-2  hidden sm:block w-[90%] h-screen transition duration-250 my-2 '  }>
   
      <div className=' mt-4'>
        <img src={'https://picsum.photos/id/237/200/300'} alt="" className=' sm:w-12 sm:h-16  md:w-20 rounded-full h-20 mx-auto'/>
     
      </div>
      <div className='  text-2xl font-semibold uppercase py-2 text-gray-400'> 
         {loginUser.name}
              </div>
      <div className='h-[60vh] mt-4 text-center flex flex-col gap-2  sm:gap-2 '>

      <div  className="py-2 hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 flex  "
                 onClick={() => handleButtonClick('Dashboard')} >
        <img src={home} className='w-8 mx-2' alt="" />
        <button className='sm:hidden md:block' >Home</button>
        </div>

        <div  className=" py-2 hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 flex"
                 onClick={() => handleButtonClick('Layout')} >
        <img src={Dashboard} className='w-8 mx-2' alt="" />
       <button    className='sm:hidden md:block' >Dashboard</button>
        </div>

        <div  className="py-2 hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 flex"
               onClick={() => handleButtonClick('Income')} >
        <img src={wallet} className='w-8 mx-2' alt="" />
        <button  className='sm:hidden md:block' >Income</button>
        </div>

        <div  className="py-2 hover:text-white hover:bg-[#9191d2]/[.5] rounded-lg px-2 flex"
               onClick={() => handleButtonClick('Expense')}>
        <img src={wallet} className='w-8 mx-2' alt="" />
        <button  className='sm:hidden md:block'>Expense</button>
        </div>
        
      
          <div className="py-2 hover:text-white hover:bg-[#9191d2]/[.5] flex  rounded-lg px-2 " 
                      onClick={handleTransection} >

<img src={list} className='w-6 mx-2' alt="" />

            <button  className='sm:hidden md:block'>
            {/* <UnorderedListOutlined
            className={`oneIcon mx-2 ${
              viewData === 'table' ? 'active-icon' : 'inactive-icon'
            }`}
 
          />  */}
           Transection
            </button>
         
          </div>

         
          <div className="py-2   hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 flex"
               onClick={handleChart}  >
                   <img src={chart} className='w-6 mx-2' alt="" />
          <button  className='sm:hidden md:block' >
          {/* <AreaChartOutlined
            className={`oneIcon mx-2 ${
              viewData === 'analytics' ? 'active-icon' : 'inactive-icon'
            }`}
           
          /> */}
          
          Chart
            </button>
          
          </div>

          
        
      </div>

     
        
        <div  className="px-4 py-2 mb-4 mx-auto  font-bold rounded-lg hover:bg-[#9191d2]/[.5] flex "
             onClick={handleLogout} >
              <img src={logout} className='w-8 mx-2' alt="" />

        <button className='sm:hidden md:block' >
              Logout
            </button>
        </div>
    </div>
  )
}

export default Sidebar
