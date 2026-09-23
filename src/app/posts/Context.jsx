'use client'

import useValue from "@/hooks/useValue";





const Context = () => {
    

const {value,handleValue}=useValue()
    return (
        <>
            <div className='bg-amber-200 p-10 mt-6 flex flex-col items-center justify-between gap-5 '>

                <h1 className='text-center text-2xl font-bold'>user:-{value}</h1>
                <input onChange={handleValue}  value={value} type="text" className='border border-amber-50 focus:border-red-700 bg-red-200 focus:bg-blue-200 p-4'  />
            </div>
        </>
    );
};

export default Context;