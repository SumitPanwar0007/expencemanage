import React from "react";
import Sidebar from "./Sidebar";
import { useAppContext } from "../pages/AppContext";

const Income = () => {
  const { allTransaction, setAllTransaction } = useAppContext();

  const totalIncome = allTransaction
    .filter((transection) => transection.type === "income")
    .reduce((acc, transection) => acc + transection.amount, 0);

  console.log("the all tarnssecton are:: ", allTransaction);

  return (
    <div className="mt-6">
      <h1 className=" px-4 text-3xl font-bold">Income</h1>
      <br />
      <div className="flex flex-col justify-end items-end gap-4">
        <div className="w-[80vw] h-16 text-center bg-[#262651] text-white/[0.6] rounded-lg mx-2 py-2 text-3xl">
          Total Income :{" "}
          <span className="text-[#166534] text-bold font-bold">
           
            ₹ {totalIncome}
          </span>
        </div>
        {allTransaction.map((transection) => {
          if (transection?.type === "income") {
            const transactionDate = new Date(transection.date);
         const formattedDate = transactionDate.toISOString().split('T')[0]; 
            return (<>
                
              <div className="w-[60vw]  h-16 flex flex-col bg-[#484899]/[0.6] rounded-lg mx-2 py-2 ">
              <div className="w-full pl-8 text-xl"><p>{transection.description}</p> </div>
              <div className="flex justify-evenly text-sm pl-4 gap-2">
                <p className="text-[#166534] text-xl"> ₹{transection.amount}</p>
                 <p>Date: {formattedDate}</p>
                 <p>{transection.category}</p>
              </div>
              </div>
              </> );
          }
        })}
      </div>

      
    </div>
  );
};

export default Income;
