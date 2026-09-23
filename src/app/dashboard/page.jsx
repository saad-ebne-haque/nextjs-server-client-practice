'use client'

import useValue from "@/hooks/useValue";






const DashboardPage = () => {
    const { value, handleValue } = useValue();
    return (
        <>
            <h1 className="text-center mt-10 font-black text-7xl">Dashboard</h1>

            <input onChange={handleValue} placeholder="write something" type="text" name="userinp" id="userinp" className="bg-amber-50 mt-3.5" value={value}/>

            <p className="text-amber-600 font-bold text-3xl">{value}</p>
        </>
    );
};

export default DashboardPage;