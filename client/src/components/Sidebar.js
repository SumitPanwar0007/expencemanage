import { AreaChartOutlined, UnorderedListOutlined } from '@ant-design/icons'
import React, { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useAppContext} from '../pages/AppContext'
import { message } from 'antd'
import home from '../images/home.png'


const Sidebar = () => {
  const navigate=useNavigate();
  const { 
    
        viewData,setViewData,
        frequency,setFrequency,
        loginUser, setLoginUser,
        dashboard,setDashboard,
        activeButton, setActiveButton,
        menu, setMenu
        

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
console.log(menu)

  return (
    <div  className={menu ? 'my-8 px-2  bg-[#9191d2]/[.8]  text-white  h-screen flex flex-col justify-center gap-4 fixed top-0 left-0 transition duration-100 z-10 '
                          :' bg-[#262651] text-white px-2 text-center rounded-lg mx-auto py-2  hidden sm:block w-[90%] -left-100 transition duration-250 my-2 '  }>
   
      <div className=' mt-2'>
        <img src={'https://picsum.photos/id/237/200/300'} alt="" className='w-20 rounded-full h-20 mx-auto'/>
     
      </div>
      <div className='  text-2xl font-semibold uppercase'> 
         {loginUser.name}
              </div>
      <div className='h-[60vh] mt-8 text-center flex flex-col gap-2  sm:gap-4 '>

      <div  className="bg-[#262651] sm:bg-[#484899]/[0.6] hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 sm:my-2">
        <button onClick={() => handleButtonClick('Dashboard')}>Home</button>
        </div>

        <div  className=" bg-[#262651] sm:bg-[#484899]/[0.6] hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 my-2">
       <button    onClick={() => handleButtonClick('Layout')}>Dashboard</button>
        </div>

        <div  className="bg-[#262651] sm:bg-[#484899]/[0.6] hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 my-2">
        <button onClick={() => handleButtonClick('Income')}>Income</button>
        </div>

        <div  className="bg-[#262651] sm:bg-[#484899]/[0.6] hover:text-white hover:bg-[#9191d2]/[.5] rounded-lg px-2 my-2">
        <button onClick={() => handleButtonClick('Expense')}>Expense</button>
        </div>
        
      
          <div className="bg-[#262651] sm:bg-[#484899]/[0.6] hover:text-white hover:bg-[#9191d2]/[.5]   rounded-lg px-2 shadow-sm shadow-slate-700 ">
            <button  onClick={handleTransection} className=''>
            <UnorderedListOutlined
            className={`oneIcon mx-2 ${
              viewData === 'table' ? 'active-icon' : 'inactive-icon'
            }`}
 
          />  Transection
            </button>
         
          </div>

         
          <div className="bg-[#262651] sm:bg-[#484899]/[0.6]   hover:text-white hover:bg-[#9191d2]/[.5]  rounded-lg px-2 shadow-sm shadow-slate-700">
          <button  onClick={handleChart} >
          <AreaChartOutlined
            className={`oneIcon mx-2 ${
              viewData === 'analytics' ? 'active-icon' : 'inactive-icon'
            }`}
           
          />
          Chart
            </button>
          
          </div>

          
        
      </div>

      <button
              onClick={handleLogout}
              className="px-4 py-2 bg-[#B24C7D] text-white rounded-lg hover:bg-[#724c77] "
            >
              Logout
            </button>
        
        <div className="block sm:hidden"></div>
    </div>
  )
}

export default Sidebar
