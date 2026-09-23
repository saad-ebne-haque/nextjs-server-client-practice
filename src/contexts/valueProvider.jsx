"use client"

import { createContext, useState } from 'react';
export const ValueContext = createContext(null);
const ValueProvider = ({ children }) => {
    const [value, setValue] = useState('');


    return (
        <>
            <ValueContext.Provider value={[value, setValue]}>{children}</ValueContext.Provider>

        </>
    );
};

export default ValueProvider;