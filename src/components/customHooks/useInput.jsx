import  {useState} from 'react';

export const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    console.log(value)
    return (
        [{ value, onChange: e => setValue(e.target.value)},
            () => setValue(initialValue)]
    );
};

