'use client'

import { ValueContext } from '@/contexts/valueProvider';
import { useContext } from 'react';


const useValue = () => {
    const [value, setValue] = useContext(ValueContext);

    const handleValue = (event) => {
        setValue(event.target.value)
    }

    return (
        { value, handleValue }
    );
};

export default useValue;