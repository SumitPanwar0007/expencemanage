import React from 'react'
import  { Progress } from 'antd'


const Analytics = ({allTransection}) => {
//categroies array
const categories=[
            "salary",
            "tip",
            "project",
            "food",
            "movie",
            "bills",
            "medical",
            "fee",
            "tax"
]

    //total transections
const totalTransection= allTransection.length;
  const totalIncomeTransection= allTransection.filter((transection)=>transection.type=== "income");
  const totalExpenceTransection= allTransection.filter((transection)=>transection.type==='expense');

  const totalIncomePercent= (totalIncomeTransection.length/totalTransection)*100;
  const totalExpencePercent= (totalExpenceTransection.length/totalTransection)*100;


  //total turnover

  const totalTurnover=allTransection.reduce((acc,transection)=> acc+ transection.amount,0)

  const totalIncomeTurnover=allTransection
                            .filter((transection)=> transection.type ==="income")
                            .reduce((acc,transection)=>acc+transection.amount,0);

    const totalExpenceTurnover= allTransection
                                .filter((transection)=>transection.type==='expense')
                                .reduce((acc,transection)=>acc+transection.amount,0);

    const totalIncomeTurnoverPercent= (totalIncomeTurnover/totalTurnover)*100;
    const totalExpenseTurnoverPercent= (totalExpenceTurnover/totalTurnover)*100;


  return (
    <> 
     <div className='grid sm:grid-cols-4 '>
       
    

     
        <div className="mt-4 px-2">
            <div className=" bg-[#484899]/[0.6] shadow-slate-300 shadow-lg text-center rounded-lg">
                <div className='text-2xl py-2 bg-[#262651] mb-6 rounded-t-lg text-center text-white/[0.6]'>
                    Total 
                     Transection: <br />{totalTransection}
                </div>
                <div className="text-xl">
                    <h3 className='text-[#166534] '>Income: ₹ {totalIncomeTransection.length}</h3>
                    <h3 className='text-[#991b1b]'>Expense: ₹ {totalExpenceTransection.length}</h3>
                    <div className='gap-4'>
                        <Progress 
                                    type="circle"
                                    percent={totalIncomePercent.toFixed(0)}
                                    strokeColor={'#166534'}
                                    className="mx-2 my-4 "
                        />
                        <Progress 
                                    type="circle"
                                    percent={totalExpenseTurnoverPercent.toFixed(0)}
                                    strokeColor={'#991b1b'}
                                    className="mx-2 my-4 "
                        />
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-4 px-2">
            <div className=" bg-[#484899]/[0.6] shadow-slate-300 shadow-lg text-white/[0.6] rounded-lg text-center">
                <div className='text-2xl py-2 bg-[#262651]  mb-6 rounded-t-lg text-center'>
                    Total Turnover: <br /> {totalTurnover}
                </div>
                <div className="text-xl">
                    <h3 className='text-[#166534]'>Income:  ₹ {totalIncomeTurnover}</h3>
                    <h3 className='text-[#991b1b]'>Expense: ₹ {totalExpenceTurnover}</h3>
                    <div>
                        <Progress 
                                    type="circle"
                                    percent={totalIncomeTurnoverPercent.toFixed(0)}
                                    strokeColor={'#166534'}
                                    className="mx-2 my-4"
                        />
                        <Progress 
                                    type="circle"
                                    percent={totalExpencePercent.toFixed(0)}
                                    strokeColor={'#991b1b'}
                                    className="mx-2 my-4"
                        />
                    </div>
                </div>

            </div>
        </div>

    
         <div className="mt-4 m-2 rounded-lg shadow-slate-300 shadow-lg  bg-[#484899]/[0.6] text-white/[0.6]">
            <h4 className='text-2xl py-2 bg-[#262651]  mb-6 rounded-t-lg text-center'>Categorywise <br /> Income</h4>

            {categories.map((category)=>{

                const amount= allTransection
                            .filter(
                                (transection)=>transection.type==="income" && transection.category===category
                            )
                            .reduce((acc,transection)=>acc+ transection.amount,0);
                            return(
                                amount>0 &&(
                                <div className=" p-2">
                                    <div className="card-body">
                                        <h4>{category}</h4>
                                        <Progress    
                                        strokeColor={'#166534'}
                                                    percent={((amount/totalIncomeTurnover)*100).toFixed(0)} />
                                    </div>
                                </div>
                            )) 
            })}
            </div>
            <div className="mt-4 m-2 rounded-lg shadow-slate-300 shadow-lg  bg-[#484899]/[0.6] text-white/[0.6]">
            <h4 className='text-2xl py-2 bg-[#262651]  mb-6 rounded-t-lg text-center'>Categorywise <br /> expense</h4>

            {categories.map((category)=>{

                const amount= allTransection
                            .filter(
                                (transection)=>transection.type==="expense" && transection.category===category
                            )
                            .reduce((acc,transection)=>acc+ transection.amount,0);
                            return(
                                amount>0 &&(
                                <div className="p-2">
                                    <div className="card-body">
                                        <h4>{category}</h4>
                                        <Progress   
                                                     strokeColor={'#991b1b'}
                                                    percent={((amount/totalExpenceTurnover)*100).toFixed(0)} />
                                    </div>
                                </div>
                            )) 
            })}
            </div>
        </div>
  
    </>
   
  )
}

export default Analytics

