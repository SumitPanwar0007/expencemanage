import React, { useEffect } from 'react'

import {useAppContext} from '../pages/AppContext'


import { Form, Input, Modal, Select, Table, message } from 'antd';
import { DatePicker } from 'antd';

import Spinner from './layout/Spinner'
import Analytics from './Analytics'
import axios from 'axios'

const { RangePicker } = DatePicker;

const Layout = ({children}) => {
  const {
    showModal,
    setShowModal,
    loading,
    setLoading,
    allTransaction,
    setAllTransaction,
    frequency,
    setFrequency,
    selectDate,
    setSelectDate,
    type,
    setType,
    viewData,
    setViewData,
    editable,
    setEditable,
    columns, 
    setColumns, 
  } = useAppContext();
   // Get all transactions
   useEffect(() => {
    const getAllTransaction = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        setLoading(true);
        const res = await axios.post('/transection/get-transection', {
          user_id: user._id,
          frequency,
          selectDate,
          type,
        });
        setLoading(false);
        setAllTransaction(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        message.error('Fetch Issue with Transection');
      }
    };
    getAllTransaction();
  }, [frequency, selectDate, type]);



   // Delete handler
   const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post('/transection/delete-transection', {
        transectionId: record._id,
      });
      setLoading(false);
      message.success('Transection Deleted!');
    } catch(error) {
      setLoading(false);
      console.log(error);
      message.error('Unable to Delete');
    }
  };

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      if (editable) {
        await axios.post('/transection/edit-transection', {
          payload: {
            ...values,
            user_id: user._id,
          },
          transectionId: editable._id,
        });
        setLoading(false);
        message.success('Transection Updated Successfully');
      } else {
        await axios.post('/transection/add-transection', {
          ...values,
          user_id: user._id,
        });
        setLoading(false);
        message.success('Transection Added Successfully');
      }
      setShowModal(false);
      setEditable(null);
    } catch (error) {
      setLoading(false);
      console.log('Failed to add Transection', error);
    }
  };

  const tableStyle={
    padding:'0px',
    margin:'5px',
    border: '1px solid #ccc',
    borderRadius:'24px',  
    backgroundColor:'#a4478a9',

  }
  

  return (
   <>
  
   
   {loading && <Spinner />}
      <div className='filters mx-4 mt-6 bg-[#262651] text-white text-sm sm:text-base text-center'>
        <div >
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(value) => setFrequency(value)} dropdownStyle={{ backgroundColor: '#9191d2' }} >
            <Select.Option value='7' >Last week</Select.Option>
            <Select.Option value='30'>Last month</Select.Option>
            <Select.Option value='365'>Last year</Select.Option>
            <Select.Option value='custom'>Custom</Select.Option>
          </Select>
          {frequency === 'custom' && (
            <RangePicker
              value={selectDate}
              onChange={(value) => setSelectDate(value)}
            />
          )}
        </div>

        <div>
          <h6>Type</h6>
          <Select value={type} onChange={(value) => setType(value)} style={{width:80}} dropdownStyle={{ backgroundColor: '#9191d2' }} >
            <Select.Option value='all' >All</Select.Option>
            <Select.Option value='income'>Income</Select.Option>
            <Select.Option value='expense'>Expense</Select.Option>
          </Select>
        </div>

        <div>
          <button
            className=' bg-[#B24C7D]  text-white text-sm sm:text-base sm:font-bold py-2 px-2 sm:px-4 rounded'
            onClick={() => setShowModal(true)}
          >
            Add New
          </button>
        </div>
      </div>

      <div className='content'>
        {viewData === 'table' ? (
          <Table columns={columns} dataSource={allTransaction} style={tableStyle} />
        ) : (
          <Analytics allTransection={allTransaction} />

        )}
      </div>

      <Modal
        title={editable ? 'Edit Transaction' : 'Add Transaction'}
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
        
      >
        <Form layout='vertical' onFinish={handleSubmit} initialValues={editable}
        className='bg-[#9191d2]/[.5] p-2 rounded-lg'
         >
          <Form.Item label='Amount' name='amount'>
            <Input type='text' />
          </Form.Item>

          <Form.Item label='Type' name='type'>
            <Select>
              <Select.Option value='income'>Income</Select.Option>
              <Select.Option value='expense'>Expense</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Category' name='category'>
            <Select>
              <Select.Option value='salary'>Salary</Select.Option>
              <Select.Option value='tip'>Tip</Select.Option>
              <Select.Option value='project'>Project</Select.Option>
              <Select.Option value='food'>Food</Select.Option>
              <Select.Option value='movie'>Movie</Select.Option>
              <Select.Option value='bills'>Bills</Select.Option>
              <Select.Option value='electronics'>Electronics</Select.Option>
              <Select.Option value='medical'>Medical</Select.Option>
              <Select.Option value='fees'>Fees</Select.Option>
              <Select.Option value='others'>Others</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='Date' name='date'>
            {/* <DatePicker /> */}
            <Input type='date'/>
          </Form.Item>

          <Form.Item label='Reference' name='reference'>
            <Input type='text' />
          </Form.Item>

          <Form.Item label='Description' name='description'>
            <Input type='text' />
          </Form.Item>

          <div className='text-center'>
            <button
              type='submit'
              className='bg-[#B24C7D] hover:bg-[#B24C7D] text-white font-bold py-2 px-4 rounded'
            >
              Save
            </button>
          </div>
        </Form>
      </Modal>
 
   
   </>
  )
}

export default Layout
