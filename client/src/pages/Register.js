
import React,{useEffect, useState} from 'react';
import {  Form, Input,message } from 'antd';
import { Link, useNavigate} from  "react-router-dom";
import axios from 'axios';
import Spinner from '../components/layout/Spinner';


const Register = () => {
const navigate= useNavigate();

const [loading,setLoading]= useState(false);

  const handleSubmit=async (value)=>{
    try{
      setLoading(true);
      await axios.post('/users/register',value)
      message.success('Registration successfull')
      setLoading(false);
      navigate("/login");
 }
    catch(error){
      setLoading(false)
      message.error('invalid username or password')
    }
    console.log(value);
  }

  //prevent for login user
  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/')
    }
  },[navigate])
  return (
    <>
    <div className="flex flex-row justify-center items-center h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 ">
 {loading && <Spinner/>}
    <Form layout="vertical" onFinish={handleSubmit} className='w-2/3 sm:w-1/2  text-center bg-[#9191d2]/[.5] rounded-lg p-4 shadow-xl  '>
    <div className="w-full ">
      <img src="https://picsum.photos/id/237/200/300" className='w-16 mx-auto rounded-full h-16 ' alt="" />
     </div>
    <h1 className='text-3xl py-2'>Register Yourself</h1>
      <Form.Item label="Name" name="name">
      <Input  className='bg-inherit  hover:bg-slate-500/[0.4] hover:border-violet-600 border border-violet-600 focus:ring-0 focus:border-violet-600 '/>
      </Form.Item>
      <Form.Item label="Email" name="email">
      <Input className='bg-inherit  hover:bg-slate-500/[0.4] hover:border-violet-600 border border-violet-600 focus:ring-0 focus:border-violet-600 '/>
      </Form.Item>
      <Form.Item label="Password" name="password">
      <Input className='bg-inherit  hover:bg-slate-500/[0.4] hover:border-violet-600 border border-violet-600 focus:ring-0 focus:border-violet-600 '/>
      </Form.Item>

      <div className="flex flex-col items-center gap-4">
        <div>
              Already registered?<span className=' text-slate-700'><Link to='/login'>Click to Login</Link> </span>
        </div>
        <button className="bg-gradient-to-r from-[#B24C7D] to-violet-600 rounded-lg w-1/3 p-[2px] text-lg">Register</button>
      </div>
    </Form>
    </div>
    </>
  )
}

export default Register
