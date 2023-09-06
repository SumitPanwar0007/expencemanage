import React,{useState,useEffect} from 'react';
import {  Form, Input,message } from 'antd';
import { Link,useNavigate} from  "react-router-dom";
import axios from 'axios';
import Spinner from '../components/layout/Spinner';



const Login = () => {
const navigate= useNavigate();

const [loading,setLoading]= useState(false);

    const handleSubmit= async (value)=>{
       try{
        setLoading(true)

        const {data} = await axios.post('/users/login',value)
        setLoading(false)
        message.success("login Successfull")
        localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
        navigate('/')
       }
       catch(error){
        setLoading(false);
        message.error("something went wrong:!!!!")
      console.log("here the error is : ",error)
       }
       console.log(value)
      }

      //prevent for login user
  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/')
    }
  },[navigate])
  return (
    <>
    
    <div className="flex flex-col justify-center items-center w-full h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 ">
      
    {loading && <Spinner/>}
    <Form  layout="vertical"  onFinish={handleSubmit} className='w-2/3 sm:w-1/2 text-center bg-[#9191d2]/[.5] rounded-lg p-4 shadow-xl  '>
    <div className="w-full h-10">
      <img src="https://picsum.photos/id/237/200/300" className='w-14 mx-auto rounded-full h-14' alt="" />
     </div>
    <h1 className='text-3xl my-4'>Welcome Back { console.log(localStorage.getItem('user')) }</h1>
     
    
      <Form.Item label="Email" name="email" >
      <Input type="email" placeholder='Sumitpanwar3107@gmail.com'  className=' bg-inherit  hover:bg-slate-500/[0.4] hover:border-violet-600 border border-violet-600 focus:ring-0 focus:border-violet-600 '/>
      </Form.Item>
     
      <Form.Item label="Password" name="password">
      <Input type="password" placeholder='*******' className='bg-inherit  hover:bg-slate-500/[0.4] hover:border-violet-600 border border-violet-600 focus:ring-0 focus:border-violet-600 '/>
      </Form.Item>

      <div className="flex flex-col items-center gap-4">
        <div className=''>
          
       NOt registered? <span className=' text-slate-800'><Link to='/register'>Click to Register</Link> </span>
        </div>
        <button className="bg-gradient-to-r from-[#B24C7D] to-violet-600 rounded-lg w-1/3 p-[2px] text-lg">LOGIN</button>
      </div>
    </Form>

    </div>
    </>
  )
}

export default Login
