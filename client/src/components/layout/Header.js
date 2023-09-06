import React, { useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import {useAppContext} from '../../pages/AppContext'
import burger from '../../images/burger.png'


const Header = () => {
  const navigate = useNavigate();
 
      const {
            loginUser, setLoginUser,
            menu, setMenu
        } = useAppContext();

        const handleMenu=()=>{
          setMenu(!menu)  
        }
 

  return (
    <nav className="bg-[#9191d2]/[.5] p-2  ">
      <div className="w-full fixed sm:static mx-auto  bg-[#262651]  sm:bg-inherit px-2 sm:rounded-lg text-white z-50 top-0 left-0 items-center flex justify-between sm:text-blue-800 ">
  
      <img src={burger} alt=""  className='w-10 cursor-pointer  sm:hidden' onClick={handleMenu}/>
        <Link to="/" className="text-2xl font-bold ">
           ManageKro
        </Link>
        <ul className="flex items-center space-x-4 ">
          <li>
            {loginUser && <span className="">{loginUser.name}</span>}
          </li>
           <li>
           
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
