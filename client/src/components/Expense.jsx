import React from 'react'
import { useAppContext } from "../pages/AppContext";


const Expense = () => {
    const { allTransaction, setAllTransaction } = useAppContext();

    const totalIncome = allTransaction
      .filter((transection) => transection.type === "expense")
      .reduce((acc, transection) => acc + transection.amount, 0);
  return (
    <div className='mt-6 w-full'>
    <h1 className=" px-4 text-3xl font-bold">Expanse</h1>
    <br />
    <div className="flex flex-col justify-end items-end gap-4">
      <div className="w-[90vw] sm:w-[80vw] h-16 text-center bg-[#262651] rounded-lg mx-2 py-2 text-3xl text-white/[0.6]">
        Total Expanse :{" "}
        <span className="text-[#991b1b] text-bold font-bold">
          
          ₹ {totalIncome}
        </span>
      </div>
      {allTransaction.map((transection) => {
        if (transection?.type === "expense") {
          const transactionDate = new Date(transection.date);
       const formattedDate = transactionDate.toISOString().split('T')[0]; 

          return (
          <>
  
         <div className="w-10/12 sm:w-[60vw]  h-16 flex flex-col  bg-gradient-to-r from-[#3A50CA] to-indigo-400 backdrop-blur-2xl backdrop-brightness-50 rounded-lg mx-2 py-2 shadow-md shadow-slate-500 ">
            <div className="w-full pl-8 text-xl"><p> {transection.description}</p> </div>
            <div className="flex justify-evenly text-sm pl-4 gap-2">
              <p className='text-red-900 text-2xl font-semibold mb-2'> ₹{transection.amount}</p>
               <p>Date: {formattedDate}</p>
               <p>{transection.category}</p>
            </div>
            </div>
            </> );
        }
      })}
    </div>
  </div>
  )
}

export default Expense
